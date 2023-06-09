import { FormData, formSchema } from './models/formData'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const CreateEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const saveEmployee = (data: FormData) => console.log(data)

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit(saveEmployee)} id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" {...register('firstName')} />
          {errors.firstName && <span>{errors.firstName.message}</span>}

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" {...register('lastName')} />
          {errors.lastName && <span>{errors.lastName.message}</span>}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" {...register('birthdate')} />
          {errors.birthdate && <span>{errors.birthdate.message}</span>}

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" {...register('startDate')} />
          {errors.startDate && <span>{errors.startDate.message}</span>}

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" {...register('address.street')} />
            {errors.address?.street && (
              <span>{errors.address?.street?.message}</span>
            )}

            <label htmlFor="city">City</label>
            <input id="city" type="text" {...register('address.city')} />
            {errors.address?.city && (
              <span>{errors.address?.city?.message}</span>
            )}

            <label htmlFor="state">State</label>
            <select id="state" {...register('address.state')}></select>
            {errors.address?.state && (
              <span>{errors.address?.state?.message}</span>
            )}

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              {...register('address.zipcode')}
            />
            {errors.address?.zipcode && (
              <span>{errors.address?.zipcode?.message}</span>
            )}
          </fieldset>

          <label htmlFor="department">Department</label>
          <select id="department" {...register('department')}>
            {errors.department && <span>{errors.department.message}</span>}
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={() => trigger()}>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  )
}

export default CreateEmployeeForm
