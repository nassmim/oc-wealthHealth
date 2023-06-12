import { Arrow } from '../style.ts'
import PaginateLeftArrow from '../../../assets/pagination-left-arrow.svg'
import { TableColumn } from '../types.tsx'

const TableHead = ({ columns }: { columns: TableColumn[] }) => {
  return (
    <thead>
      <tr>
        <th>
          <div className="title">
            <p>First Name</p>
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
        <th>
          Last Name
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          Start Date
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          Department
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          Date of Birth
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          Street
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          City
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          State
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
        <th>
          Zipcode
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort ascending"
              width="10px"
              rotate="-90deg"
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Sort descending"
              width="10px"
              rotate="90deg"
            />
          </div>
        </th>
      </tr>
    </thead>
  )
}
export default TableHead
