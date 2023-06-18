import { Title } from '../../style.ts'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Title>
      <Link to="/">HRnet</Link>
    </Title>
  )
}

export default Header
