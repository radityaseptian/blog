import Default from '../layouts/dashboard/Default'
import Post from '../layouts/dashboard/Post'
import Create from '../layouts/dashboard/Create'
import { GoDashboard } from 'react-icons/go'
import { ImBlog } from 'react-icons/im'
import { GrDocumentStore } from 'react-icons/gr'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PostContext } from '../layouts/dashboard/context/PostContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const [number, setNumber] = useState(1)
  const [post, setPost] = useState([])
  const value = {
    post,
    setPost,
  }
  const url = 'http://localhost:3000/dashboard/post'
  const getPost = async () => {
    fetch(url, { credentials: 'include' })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          return navigate('/')
        }
        setPost(res)
      })
  }
  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <section className='min-h-screen flex flex-col sm:flex-row gap-1 bg-slate-100'>
        <nav>
          <ul className='sm:w-48 bg-slate-300'>
            <li className='text-center py-4 bg-primary text-white'>
              <Link to='/' className='p-1'>
                @myblog
              </Link>
            </li>
            <ul className='p-2 flex sm:flex-col gap-2'>
              <li
                onClick={() => setNumber(1)}
                className={`${
                  number == 1 ? 'bg-primary text-white' : 'bg-slate-100'
                } flex items-center gap-2 cursor-pointer rounded px-4 py-2`}
              >
                <GoDashboard />
                <span className='hidden sm:block'>DASHBOARD</span>
              </li>
              <li
                onClick={() => setNumber(2)}
                className={`${
                  number == 2 ? 'bg-primary text-white' : 'bg-slate-100'
                } flex items-center gap-2 cursor-pointer rounded px-4 py-2`}
              >
                <GrDocumentStore className={number == 2 && 'icon'} />
                <span className='hidden sm:block'>POSTS</span>
              </li>
              <li
                onClick={() => setNumber(3)}
                className={`${
                  number == 3 ? 'bg-primary text-white' : 'bg-slate-100'
                } flex items-center gap-2 cursor-pointer rounded px-4 py-2`}
              >
                <ImBlog />
                <span className='hidden sm:block'>CREATE</span>
              </li>
            </ul>
          </ul>
        </nav>
        <div className='flex-1'>
          <PostContext.Provider value={value}>
            {number == 1 && <Default />}
            {number == 2 && <Post />}
            {number == 3 && <Create />}
          </PostContext.Provider>
        </div>
      </section>
    </>
  )
}
