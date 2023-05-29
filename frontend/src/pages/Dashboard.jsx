import Default from '../layouts/dashboard/Default'
import Post from '../layouts/dashboard/Post'
import Create from '../layouts/dashboard/Create'
import { GoDashboard } from 'react-icons/go'
import { ImBlog } from 'react-icons/im'
import { GrDocumentStore } from 'react-icons/gr'
import { useState } from 'react'

export default function Dashboard() {
  const [number, setNumber] = useState(1)

  return (
    <>
      <section className='min-h-screen flex flex-col sm:flex-row gap-1 bg-slate-100'>
        <nav>
          <ul className='sm:w-48 bg-red-300'>
            <li className='text-center py-4 bg-primary text-white'>
              @myblog
            </li>
            <ul className='p-2 flex sm:flex-col gap-2'>
              <li
                onClick={() => setNumber(1)}
                className={`${
                  number == 1 ? 'bg-primary text-white' : 'bg-slate-200'
                } flex items-center gap-2 cursor-pointer rounded px-4 py-2`}
              >
                <GoDashboard />
                <span className='hidden sm:block'>DASHBOARD</span>
              </li>
              <li
                onClick={() => setNumber(2)}
                className={`${
                  number == 2 ? 'bg-primary text-white' : 'bg-slate-200'
                } flex items-center gap-2 cursor-pointer rounded px-4 py-2`}
              >
                <GrDocumentStore className={number == 2 && 'icon'} />
                <span className='hidden sm:block'>POSTS</span>
              </li>
              <li
                onClick={() => setNumber(3)}
                className={`${
                  number == 3 ? 'bg-primary text-white' : 'bg-slate-200'
                } flex items-center gap-2 cursor-pointer rounded px-4 py-2`}
              >
                <ImBlog />
                <span className='hidden sm:block'>CREATE</span>
              </li>
            </ul>
          </ul>
        </nav>
        <div className='flex-1'>
          {number == 1 && <Default />}
          {number == 2 && <Post />}
          {number == 3 && <Create />}
        </div>
      </section>
    </>
  )
}
