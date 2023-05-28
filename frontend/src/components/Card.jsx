/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Card({ children,title, href, tag, read }) {
  return (
    <>
      <div className='sm:max-w-sm hover:-translate-y-[3px] p-2 transition duration-500 bg-slate-400 rounded'>
        <div className='p-2 pl-3'>
          <Link to={href}>
            <h3 className='text-lg'>{title}</h3>
            <p className='text-sm py-2'>{children}</p>
          </Link>
          <div className='flex justify-between items-center flex-1 mt-1'>
            <Link to={tag.href} className='bg-primary text-white self-start px-2 py-1 rounded text-sm'>{tag.name}</Link>
            <span className='px-1 text-sm'>{read}</span>
          </div>
        </div>
      </div>
    </>
  )
}
