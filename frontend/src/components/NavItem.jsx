/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export default function NavItem({ children, href }) {
  return (
    <>
      <li>
        <Link to={href} className='p-2'>{children}</Link>
      </li>
    </>
  )
}
