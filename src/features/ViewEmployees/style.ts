import styled from 'styled-components'

export const EmployeesSection = styled.section``

export const TableDisplayOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  }
`

export const EntriesLengthChoice = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  input {
    height: 15px;
    width: 30px;
  }
`

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  input {
    height: 30px;
    border-radius: 5px;
  }
`

export const TablePagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 5%;
  margin-bottom: 30px;

  .arrows {
    display: flex;
    column-gap: 30px;
  }

  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 20px;
  }
`

export const Arrow = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  className: props.className,
}))`
  ${(props) => {
    return `
      width: ${props.width};
      cursor: ${props.cursor};
      transform: rotate(${props.rotate})
    `
  }}
`
