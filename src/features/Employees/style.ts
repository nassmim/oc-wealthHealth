import styled from 'styled-components'

export const EmployeesSection = styled.section``

export const TableDisplayOptions = styled.div`
  display: flex;
  justify-content: space-between;

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
  margin-bottom: 20px;

  .arrows {
    display: flex;
    column-gap: 30px;
  }

  @media (max-width: 767px) {
    justify-content: center;
    margin-top: 20px;
  }
`

export const EmployeesTable = styled.table`
  width: 100%;
  background-color: #fff;

  border-spacing: 0 0;

  th {
    background-color: #fff;
    border-bottom: 3px solid #d6d2d2;
    font-weight: bold;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 10px;
    }

    .arrows {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .sort-arrow {
    background-repeat: no-repeat;
    background-position: center right;
  }

  td {
    text-align: center;
    border-top: 1px solid #d6d2d2;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  tr:first-child td {
    border-top: none;
  }

  tbody tr:nth-child(n) td {
    background: #fff;
  }

  tbody tr:nth-child(2n) td {
    background: #e2ffa6;
  }

  @media (max-width: 767px) {
    font-size: 9px;

    .title {
      flex-direction: column;

      .arrows {
        flex-direction: row;
      }
    }
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
