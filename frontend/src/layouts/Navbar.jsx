import Container from '../components/Container'
import NavItem from '../components/NavItem'
import { GoKebabVertical } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi'
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [showNavSlidder, setShowNavSlidder] = useState(false)
  const [searchItem, setSearchItem] = useState([])
  const [notFound, setNotFound] = useState(false)
  const context = useContext(ThemeContext)
  const url = 'http://localhost:3000/search?keyw='

  useEffect(() => {
    if (context.theme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', false)
    }
  }, [context.theme])

  // useEffect(() => {
  //   window.addEventListener('keydown', searchHandle)

  //   return () => window.removeEventListener('keydown', searchHandle)
  // }, [])
  // const searchHandle = (e) => {
  //   e.preventDefault()
  //   const ctrl = e.code === 'ControlLeft'
  //   const k = e.code === 'KeyK'
  //   if (ctrl && k) {
  //     setShowSearch(true)
  //   }
  // }

  const getSearch = async (param) => {
    setTimeout(() => {
      fetch(`${url}${param}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            setSearchItem([])
            return setNotFound(true)
          }
          setNotFound(false)
          setSearchItem(res)
        })
    }, 500)
  }

  return (
    <>
      <nav className='dark:bg-zinc-800 bg-white dark:text-white transition duration-500 fixed left-0 top-0 right-0 z-10'>
        <Container>
          <div className='flex justify-between py-4 sm:py-3'>
            <div className='flex flex-row-reverse sm:flex-row items-center gap-3 sm:gap-6'>
              <Link to='/'>
                <h2 className='text-lg first-letter:text-2xl'>Radwritter</h2>
              </Link>
              <ul className='hidden gap-4 sm:flex pt-1'>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/article'>Article</NavItem>
                <NavItem href='/tag'>Tag</NavItem>
              </ul>
              <GoKebabVertical
                onClick={() => setShowNavSlidder(!showNavSlidder)}
                className='sm:hidden p-[7px] w-5 h-5 dark:hover:bg-zinc-700 hover:bg-zinc-200 hover:-translate-y-1 transition duration-500 box-content cursor-pointer rounded'
              />
            </div>
            <div className='flex gap-2 self-start'>
              <div
                onClick={() => setShowSearch(!showSearch)}
                className='flex items-center gap-2 md:px-2 md:dark:hover:bg-zinc-700 md:hover:bg-zinc-200 hover:-translate-y-1 transition duration-500 md:border md:py-1 dark:border-slate-600 rounded cursor-pointer'
              >
                <BiSearchAlt className='box-content p-[7px] dark:hover:bg-zinc-700 hover:bg-zinc-200 hover:-translate-y-1 transition duration-500 rounded md:p-0 w-6 h-6 md:w-5 md:h-5' />
                <div className='hidden md:flex gap-1'>
                  <span>Search...</span>
                  <span className='bg-slate-200/80 dark:bg-slate-200/20 transition duration-500 text-sm pt-[.125rem] px-1 rounded'>
                    Ctrl+K
                  </span>
                </div>
              </div>
              <a
                href='http://github.com/radityaseptian/blog'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsGithub className='box-content p-[7px] w-5 h-5 dark:hover:bg-zinc-700 hover:bg-zinc-200 hover:-translate-y-1 transition duration-500 md:border dark:border-slate-600 rounded cursor-pointer' />
              </a>
              <span onClick={() => context.setTheme(!context.theme)}>
                {context.theme ? (
                  <FiSun className='box-content p-[7px] w-5 h-5 dark:hover:bg-zinc-700 dark:border-slate-600 hover:bg-zinc-200 hover:-translate-y-1 transition duration-500 md:border rounded cursor-pointer' />
                ) : (
                  <FaRegMoon className='box-content p-[7px] w-5 h-5  dark:hover:bg-zinc-700 hover:bg-zinc-200 hover:-translate-y-1 transition duration-500 md:border rounded cursor-pointer' />
                )}
              </span>
            </div>
          </div>
        </Container>
      </nav>
      {showNavSlidder && (
        <NavSlider onClick={() => setShowNavSlidder(!showNavSlidder)} />
      )}
      {showSearch && (
        <section className='fixed inset-0 flex text-black dark:text-white justify-center items-start bg-black/30 backdrop-blur-sm z-40'>
          <div className='w-11/12 md:w-10/12 lg:w-[45rem] overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-28 bg-white dark:bg-zinc-700 rounded-lg'>
            <div className='flex flex-wrap gap-3 p-2 items-center bg-white dark:bg-zinc-700 border-b border-slate-400'>
              <BiSearchAlt className='box-content w-6 h-6 pl-1' />
              <input
                type='text'
                placeholder='Search article...'
                maxLength={50}
                onChange={(e) => getSearch(e.target.value)}
                autoFocus
                className='flex-1 py-2 bg-transparent focus:outline-none text-sm placeholder:text-black/70 dark:placeholder:text-white/70'
              />
              <span
                onClick={() => setShowSearch(false)}
                className='bg-red-400 text-sm px-4 py-2 rounded text-white cursor-pointer'
              >
                CLOSE
              </span>
            </div>
            <div className='p-2 flex flex-col gap-2'>
              {notFound ? (
                <span className='text-sm py-2'>No results found</span>
              ) : (
                <>
                  {searchItem &&
                    searchItem.map((item) => {
                      return (
                        <Link
                          to={`/article/${item._id}`}
                          key={item._id}
                          className='px-2 py-3 line-clamp-1 bg-slate-100 dark:bg-zinc-800 text-sm rounded flex items-center justify-between'
                        >
                          {item.title}
                        </Link>
                      )
                    })}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function NavSlider(props) {
  return (
    <>
      <div {...props} className='fixed inset-0 z-10 sm:hidden'>
        <ul className='flex flex-col gap-6 p-4 fixed top-[4.1rem] left-0 w-40 rounded bg-white'>
          <NavItem>Home</NavItem>
          <NavItem>Article</NavItem>
          <NavItem>Tag</NavItem>
        </ul>
      </div>
    </>
  )
}
