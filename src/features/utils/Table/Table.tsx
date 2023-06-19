import { TableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'
import type { TableColumn, DataRows } from '../types/types.ts'

const Table = ({
  data,
  columns,
  sortData,
  sortArrowsProps,
}: {
  data: DataRows
  columns: TableColumn[]
  sortData: (sortingField: string, sortingOrder: string) => void
  sortArrowsProps?: { [key: string]: any }
}) => {
  return (
    <TableStyled>
      <TableHead
        columns={columns}
        sortData={sortData}
        sortArrowsProps={sortArrowsProps}
      />
      <TableBody columns={columns} employees={data} />
    </TableStyled>
  )
}

export default Table
