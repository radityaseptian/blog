/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Button from '../../../components/Button'

export default function Editor() {
  const [value, setValue] = useState('')

  const select = (e) => {
    setValue(e.target.value)
    localStorage.setItem('select', e.target.value)
  }
  useEffect(() => {
    setValue(localStorage.getItem('select') || 'title')
  }, [])

  return (
    <>
      <div className='bg-red-300 py-2 px-2 flex flex-col gap-2 min-h-[calc(100vh-40px)]'>
        <div className='flex justify-between items-center flex-wrap gap-4'>
          <div className='flex items-center gap-3 flex-wrap'>
            <select
              onChange={select}
              value={value}
              className='p-2 rounded text-center cursor-pointer'
            >
              <option value='title'>Title</option>
              <option value='paragraf-title'>Paragraf-title</option>
              <option value='paragraf'>Paragraf</option>
              <option value='read-time'>Read-time</option>
              <option value='list'>List</option>
              <option value='code'>Code</option>
              <option value='image'>Image</option>
            </select>
            <div className='flex gap-3 flex-wrap items-center text-sm'>
              <span className='bg-slate-100 px-3 py-1 rounded cursor-pointer'>
                Link
              </span>
              <input
                type='file'
                accept='image/*'
                className='bg-slate-100 py-1 file:border-none file:bg-transparent cursor-pointer rounded'
              />
              <span className='bg-slate-100 px-3 py-1 rounded cursor-pointer'>
                Bg-text
              </span>
            </div>
          </div>
          <div className='flex gap-4'>
            <Button>Save</Button>
            <Button className='bg-green-500 hover:bg-green-500/90'>
              Create
            </Button>
          </div>
        </div>
        <textarea
          type='text'
          placeholder='Enter content...'
          className='px-2 py-1 rounded focus:outline-none flex-1'
        />
      </div>
    </>
  )
}
