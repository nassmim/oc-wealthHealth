import { Arrow } from '../style.ts'
import PaginateLeftArrow from '../../../assets/pagination-left-arrow.svg'
import type { TableColumn } from '../types.tsx'

const TableHead = ({ columns }: { columns: TableColumn[] }) => {
  return (
    <thead>
      <tr>
        {columns.map(
          ({ label, accessor }: { label: string; accessor: string }) => (
            <th key={accessor}>
              <div className="title">
                <p>{label}</p>
                <div className="arrows">
                  <Arrow
                    src={PaginateLeftArrow}
                    alt="Sort descending"
                    width="10px"
                    rotate="90deg"
                    className="sort-arrow"
                    cursor="pointer"
                  />
                  <Arrow
                    src={PaginateLeftArrow}
                    alt="Sort ascending"
                    width="10px"
                    rotate="-90deg"
                    className="sort-arrow"
                    cursor="pointer"
                  />
                </div>
              </div>
            </th>
          )
        )}
      </tr>
    </thead>
  )
}
export default TableHead
