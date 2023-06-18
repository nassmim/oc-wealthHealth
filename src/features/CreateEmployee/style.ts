import styled from 'styled-components'
import { CSSObjectWithLabel } from 'react-select'

export const SectionEmployeeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  .close-success-modal {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  .submit-button {
    width: 10%;
    align-self: center;
    cursor: pointer;
  }
`

export const FieldsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  label {
    width: fit-content;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const FieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  input {
    height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border: solid 1px;
    background-color: #f1ecec;
    font-size: 18px;
  }

  label {
    font-weight: bold;
  }

  .datepicker {
    width: 100%;

    .react-datepicker__input-container {
      display: flex;
    }

    input {
      width: 100%;
      background: #e0d9d8;
    }
  }
`

export const DatePickerCalendarContainer = styled.div`
  padding: 16px;
  background: #216ba5;
  color: #fff;
`

export const DatePickerHeader = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`
export const FieldsetStyled = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-column-start: 1;
  grid-column-end: 3;
  padding-top: 15px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const DepartmentField = styled(FieldStyled)`
  width: 120%;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const selectDropdownStyles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: 'lightcyan',
    paddingTop: '2px',
    paddingBottom: '2px',
  }),
  valueContainer: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    paddingTop: '0px',
    paddingBottom: '0px',
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    paddingTop: '0px',
    paddingBottom: '0px',
    marginTop: '0px',
    marginBottom: '0px',
  }),
}
