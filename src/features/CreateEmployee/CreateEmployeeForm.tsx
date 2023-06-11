import { FormData, formSchema } from './models/formData'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  MainContainer,
  SectionEmployeeForm,
  Container,
  ButtonStyled,
  FormStyled,
  FieldStyled,
  FieldsetStyled,
  DepartmentField,
} from './style.ts'
import DatePickerCustom from './DatePickerCustom.tsx'
import SelectDropdown from './SelectDropdown.tsx'
import SuccessModal from './SuccessModal.tsx'

const CreateEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const saveEmployee = (data: FormData) => console.log(data)

  return (
    <>
      <Container>
        <MainContainer>
          <ButtonStyled>
            <a href="employee-list.html">View Current Employees</a>
          </ButtonStyled>

          <SectionEmployeeForm>
            <h2>Create Employee</h2>

            <FormStyled
              onSubmit={handleSubmit(saveEmployee)}
              id="create-employee"
              className="flex flex-col"
            >
              <FieldStyled>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" {...register('firstName')} />
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
                        onChange={onChange}
                        value={value}
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
                        onChange={onChange}
                        value={value}
                        filteredDays={[0, 6]}
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
                  <input
                    id="street"
                    type="text"
                    {...register('address.street')}
                  />
                  {errors.address?.street && (
                    <span>{errors.address?.street?.message}</span>
                  )}
                </FieldStyled>

                <FieldStyled>
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" {...register('address.city')} />
                  {errors.address?.city && (
                    <span>{errors.address?.city?.message}</span>
                  )}
                </FieldStyled>

                <FieldStyled>
                  <label htmlFor="state">State</label>
                  <Controller
                    control={control}
                    name="address.state"
                    render={({ field: { onChange } }) => (
                      <>
                        <SelectDropdown
                          id="state"
                          onChange={onChange}
                          backgroundColor="#f1ecec"
                        />
                        {errors.address?.state && (
                          <span>{errors.address?.state?.message}</span>
                        )}
                      </>
                    )}
                  />
                </FieldStyled>

                <FieldStyled>
                  <label htmlFor="zip-code">Zip Code</label>
                  <input
                    id="zip-code"
                    type="text"
                    {...register('address.zipcode')}
                  />
                  {errors.address?.zipcode && (
                    <span>{errors.address?.zipcode?.message}</span>
                  )}
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
                        id="department"
                        onChange={onChange}
                        backgroundColor="lightcyan"
                      />
                      {errors.department && (
                        <span>{errors.department.message}</span>
                      )}
                    </>
                  )}
                />
              </DepartmentField>
            </FormStyled>

            <button className="submit-button" onClick={() => trigger()}>
              Save
            </button>
            <SuccessModal />
          </SectionEmployeeForm>
        </MainContainer>
      </Container>
    </>
  )
}

export default CreateEmployeeForm
