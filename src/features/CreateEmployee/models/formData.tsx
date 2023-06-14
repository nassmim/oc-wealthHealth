import { z, ZodType } from 'zod'

export type FormData = {
  firstName: string
  lastName: string
  birthdate: Date
  startDate: Date
  street: string
  city: string
  state: string
  zipcode: string
  department: string
}
const nameSchema = z
  .string()
  .min(1, { message: 'A name is required' })
  .regex(
    /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    'Only string caracteres are accepted'
  )
  .min(2, { message: 'Must be 2 or more characters long' })
  .trim()

const today = new Date()
const dateHeighteenYearsAgo = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDay()
)

const dateSchema = z.date({
  required_error: 'A date is required',
  invalid_type_error: "That's not a date",
})

const birthdateSchema = dateSchema.max(dateHeighteenYearsAgo, {
  message: 'Employee cannot be under 18yo',
})

const stringRequiredSchema = z
  .string()
  .min(1, { message: 'A name is required' })
  .trim()

const departmentSchema = stringRequiredSchema

const formSchema: ZodType<FormData> = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  birthdate: birthdateSchema,
  startDate: dateSchema,
  street: stringRequiredSchema,
  city: stringRequiredSchema,
  state: stringRequiredSchema,
  zipcode: z.string().regex(/^\d{5}/, { message: 'Must be 5 digit' }),
  department: departmentSchema,
})

export { formSchema }
