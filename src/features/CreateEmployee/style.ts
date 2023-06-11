import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #b7d7de;

  .submit-button {
    font-size: 1rem;
    padding: 5px 20px;
    background-color: #e8fcf6;
    border-radius: 10px;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-left: 5%;
  padding-right: 5%;
`

export const ButtonStyled = styled.button`
  align-self: self-end;
  background-color: #d9d9d9;
  padding: 5px 10px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #216ba5;
    font-weight: 600;
  }
`

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
`

export const DepartmentField = styled(FieldStyled)`
  width: 120%;
`
