import { Link } from 'react-router-dom'
import { FormData, formSchema } from './models/formData'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, MainContainer } from '../../shared/style.ts'
import { useAddEmployeeMutation } from '../api/apiEmployeesSlice.ts'
import {
  SectionEmployeeForm,
  FormStyled,
  FieldsStyled,
  FieldStyled,
  FieldsetStyled,
  DepartmentField,
  selectDropdownStyles,
} from './style.ts'
import { ButtonStyled } from '../../shared/style.ts'
import DatePickerCustom from './DatePicker/DatePickerCustom.tsx'
import DatePickerCustomCalendar from './DatePicker/DatePickerCustomCalendar.tsx'
import renderCustomDatePickerHeader from './DatePicker/DatePickerCustomHeader.tsx'
import SelectDropdown from '../../shared/Inputs/SelectDropdown.tsx'
import SuccessModal from './SuccessModal.tsx'
import { useEffect, useState } from 'react'
import useGetStates from './useGetStates.ts'
import useGetCompanyDepartments from './useGetCompanyDepartments.ts'

const CreateEmployeeForm = () => {
  const [
    addEmployeeTrigger,
    { isSuccess: employeeCreationSucceeded, isError: employeeCreationFailed },
  ] = useAddEmployeeMutation()

  const statesAsDropdownOptions = useGetStates()
  const companyDepartmentsAsDropdownOptions = useGetCompanyDepartments()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    trigger,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const handleModal = (visible: boolean) => {
    setModalIsOpen(visible)
  }

  const saveEmployee: SubmitHandler<FormData> = (data) => {
    const dataFormatted = {
      ...data,
      birthdate: data.birthdate.toDateString(),
      startDate: data.startDate.toDateString(),
    }

    addEmployeeTrigger(dataFormatted)
  }

  useEffect(() => {
    if (employeeCreationFailed || employeeCreationSucceeded)
      setModalIsOpen(true)
    if (employeeCreationSucceeded) reset()
  }, [employeeCreationFailed, employeeCreationSucceeded])

  return (
    <>
      <Container>
        <MainContainer>
          <ButtonStyled>
            <Link to="/employees-list">View Current Employees</Link>
          </ButtonStyled>

          <SectionEmployeeForm>
            <h1>Create Employee</h1>

            <FormStyled
              onSubmit={handleSubmit(saveEmployee)}
              id="create-employee"
              className="flex flex-col"
            >
              <FieldsStyled>
                <FieldStyled>
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    {...register('firstName')}
                  />
                  {errors.firstName && <span>{errors.firstName.message}</span>}
                </FieldStyled>

                <FieldStyled>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" {...register('lastName')} />
                  {errors.lastName && <span>{errors.lastName.message}</span>}
                </FieldStyled>

                <FieldStyled>
                  <label htmlFor="birthdate">Date of Birth</label>
                  <Controller
                    control={control}
                    name="birthdate"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <DatePickerCustom
                          id="birthdate"
                          wrapperClassName="datepicker"
                          renderCustomHeader={renderCustomDatePickerHeader}
                          calendarContainer={DatePickerCustomCalendar}
                          todayButton="Today"
                          isClearable
                          showIcon
                          fixedHeight
                          onChange={onChange}
                          selected={value}
                        />
                        {errors.birthdate && (
                          <span>{errors.birthdate.message}</span>
                        )}
                      </>
                    )}
                  />
                </FieldStyled>

                <FieldStyled>
                  <label htmlFor="start-date">Start Date</label>
                  <Controller
                    control={control}
                    name="startDate"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <DatePickerCustom
                          id="start-date"
                          wrapperClassName="datepicker"
                          calendarContainer={DatePickerCustomCalendar}
                          todayButton="Today"
                          isClearable
                          showIcon
                          fixedHeight
                          filterDate={(date: Date): boolean =>
                            ![0, 6].includes(date.getDay())
                          }
                          onChange={onChange}
                          selected={value}
                        />
                        {errors.startDate && (
                          <span>{errors.startDate.message}</span>
                        )}
                      </>
                    )}
                  />
                </FieldStyled>

                <FieldsetStyled>
                  <legend>Address</legend>
                  <FieldStyled>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" {...register('street')} />
                    {errors.street && <span>{errors.street?.message}</span>}
                  </FieldStyled>

                  <FieldStyled>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" {...register('city')} />
                    {errors.city && <span>{errors.city?.message}</span>}
                  </FieldStyled>

                  <FieldStyled>
                    <label htmlFor="state">State</label>
                    <Controller
                      control={control}
                      name="state"
                      render={({ field: { onChange } }) => (
                        <>
                          <SelectDropdown
                            options={statesAsDropdownOptions}
                            inputId="state"
                            onChange={(option) => onChange(option?.label)}
                            placeholder="Select his state"
                            styles={selectDropdownStyles}
                          />
                          {errors.state && <span>{errors.state?.message}</span>}
                        </>
                      )}
                    />
                  </FieldStyled>

                  <FieldStyled>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="text" {...register('zipcode')} />
                    {errors.zipcode && <span>{errors.zipcode?.message}</span>}
                  </FieldStyled>
                </FieldsetStyled>

                <DepartmentField>
                  <label htmlFor="department">Department</label>
                  <Controller
                    control={control}
                    name="department"
                    render={({ field: { onChange } }) => (
                      <>
                        <SelectDropdown
                          options={companyDepartmentsAsDropdownOptions}
                          inputId="department"
                          onChange={(option) => onChange(option?.label)}
                          placeholder="Select his department"
                          styles={selectDropdownStyles}
                        />
                        {errors.department && (
                          <span>{errors.department.message}</span>
                        )}
                      </>
                    )}
                  />
                </DepartmentField>
              </FieldsStyled>
              <button className="submit-button" onClick={() => trigger()}>
                Save
              </button>
            </FormStyled>

            <SuccessModal
              isOpen={modalIsOpen}
              handleModal={handleModal}
              textToDisplay={
                employeeCreationSucceeded
                  ? 'Employee Created!'
                  : 'Employee could not be saved'
              }
            />
          </SectionEmployeeForm>
        </MainContainer>
      </Container>
    </>
  )
}

export default CreateEmployeeForm
