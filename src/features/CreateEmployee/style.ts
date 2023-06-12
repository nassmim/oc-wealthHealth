import styled from 'styled-components'

export const SectionEmployeeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`

export const FormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

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
      width: 90%;
      background: #e0d9d8;
    }
  }
`

export const DatePickerContainer = styled.div`
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
