/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

export default function Card(props) {
  const { title, tag, read } = props
  const [confirm, setConfirm] = useState(false)
  return (
    <>
      <div className='sm:max-w-sm hover:-translate-y-[3px] p-2 transition duration-500 bg-white rounded'>
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
          <Link>
            <AiOutlineEdit className='bg-green-600 py-2 px-3 text-white box-content rounded' />
          </Link>
          <BsFillTrashFill
            onClick={() => setConfirm(true)}
            className='bg-red-600 py-2 px-3 cursor-pointer text-white box-content rounded'
          />
        </div>
      </div>
      {confirm && (
        <section className='absolute bg-black/20 inset-0 backdrop-blur-[.5px] grid place-content-center'>
          <div className='bg-white p-4'>
            <h6 className='pb-4 text-lg'>Delete</h6>
            <p className=''>Are you sure you want to delete this item?</p>
            <div className='pt-4 flex justify-between'>
              <Button
                onClick={() => setConfirm(false)}
                className='bg-slate-500 hover:bg-slate-600'
              >
                Cancel
              </Button>
              <Button {...props} className='bg-red-500 hover:bg-red-600'>
                Delete
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
