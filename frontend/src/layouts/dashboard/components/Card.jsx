/* eslint-disable react/prop-types */
import { AiOutlineEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Card({ title, tag, read, href }) {
  return (
    <>
      <div className='sm:max-w-sm hover:-translate-y-[3px] p-2 transition duration-500 bg-slate-100 rounded'>
        <div className='p-2 pl-3'>
          <h3 className='text-lg'>{title}</h3>
          <div className='flex justify-between items-center flex-1 mt-3'>
            <span className='bg-primary text-white self-start px-2 py-1 rounded text-sm'>
              {tag}
            </span>
            <span className='px-1 text-sm'>{read}</span>
          </div>
        </div>
        <div className='flex justify-end gap-3'>
          <Link to={href}>
            <AiOutlineEdit className='bg-green-600 py-2 px-3 text-white box-content rounded' />
          </Link>
          <BsFillTrashFill className='bg-red-600 py-2 px-3 cursor-pointer text-white box-content rounded' />
        </div>
      </div>
    </>
  )
}
