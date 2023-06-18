import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f7fafb;

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

export const Title = styled.h1`
  text-align: center;

  a {
    color: black;
  }
`
