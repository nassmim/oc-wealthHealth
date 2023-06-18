import { useMemo } from 'react'
import { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import { useGetCompanyDepartmentsQuery } from '../api/apiGenericDataSlice.ts'

const useGetCompanyDepartments = () => {
  const { data: companyDepartments } = useGetCompanyDepartmentsQuery(undefined)

  const companyDepartmentsAsDropdownOptions = useMemo((): OptionValue[] => {
    return companyDepartments?.map((companyDepartment: OptionValue) => {
      return {
        value: companyDepartment.value,
        label: companyDepartment.label,
      }
    })
  }, [companyDepartments])

  return companyDepartmentsAsDropdownOptions
}

export default useGetCompanyDepartments
