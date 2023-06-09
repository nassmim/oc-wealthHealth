import { z, ZodType } from 'zod'

export type FormData = {
  firstName: string
  lastName: string
  birthdate: Date
  startDate: Date
  address: {
    street: string
    city: string
    state: string
    zipcode: string
  }
  department: string
}
const nameSchema = z
  .string({
    required_error: 'A name is required',
    invalid_type_error: 'Name must be a string',
  })
  .trim()
  .min(2, { message: 'Must be 2 or more characters long' })

const today = new Date()
const dateHeighteenYearsAgo = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDay()
)

const dateSchema = z
  .date({
    required_error: 'A date is required',
    invalid_type_error: "That's not a date",
  })
  .max(dateHeighteenYearsAgo, { message: 'Employee cannot be under 18yo' })

const addressElementSchema = z
  .string({ required_error: 'Field is required' })
  .trim()
const addressSchema = z.object({
  street: addressElementSchema,
  city: addressElementSchema,
  state: addressElementSchema,
})

const addressSchemaWithZipcode = addressSchema.extend({
  zipcode: z.string().regex(/^\d{5}/, { message: 'Must be 5 digit' }),
})

const departmentSchema = z.coerce.string()

const formSchema: ZodType<FormData> = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  birthdate: dateSchema,
  startDate: dateSchema,
  address: addressSchemaWithZipcode,
  department: departmentSchema,
})

export { formSchema }
