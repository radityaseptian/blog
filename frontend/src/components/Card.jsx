/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Card({ children, title, tag, time, id }) {
  return (
    <>
      <div className='sm:max-w-sm hover:-translate-y-[3px] p-2 duration-500 bg-white dark:bg-zinc-800 shadow-custom rounded'>
        <div className='p-2 pl-3'>
          <Link to={`/article/${id}`}>
            <h3 className='text-lg line-clamp-2'>{title}</h3>
            <p className='text-sm py-2 max-h-12 mb-4 line-clamp-2 text-black/80 dark:text-white/80 duration-500'>
              {children}
            </p>
          </Link>
          <div className='flex justify-between items-center flex-1 mt-1'>
            <Link
              to={`/tag/${tag}`}
              className='bg-primary text-white self-start px-2 py-1 rounded text-sm'
            >
              {tag}
            </Link>
            <span className='px-1 text-sm'>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}
