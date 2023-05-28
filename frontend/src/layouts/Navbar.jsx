import Container from '../components/Container'
import NavItem from '../components/NavItem'
import { GoKebabVertical } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const context = useContext(ThemeContext)
  const [showNavSlidder, setShowNavSlidder] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <nav className='bg-slate-300 fixed left-0 top-0 right-0 z-10'>
        <Container>
          <div className='flex justify-between py-4 sm:py-3'>
            <div className='flex flex-row-reverse sm:flex-row items-center gap-3 sm:gap-6'>
              <Link to='/'>
                <h2 className='text-lg first-letter:text-2xl'>Newsletter</h2>
              </Link>
              <ul className='hidden gap-4 sm:flex pt-1'>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/article'>Article</NavItem>
                <NavItem href='/tag'>Tag</NavItem>
              </ul>
              <GoKebabVertical
                onClick={() => setShowNavSlidder(!showNavSlidder)}
                className='sm:hidden p-[7px] w-5 h-5 box-content bg-slate-400 cursor-pointer rounded'
              />
            </div>
            <div className='flex gap-2 self-start'>
              <div
                onClick={() => setShowSearch(!showSearch)}
                className='flex items-center gap-2 md:px-2 md:py-1 bg-slate-400 rounded cursor-pointer'
              >
                <BiSearchAlt className='box-content p-[7px] rounded md:p-0 w-5 h-5 bg-slate-400 md:bg-transparent' />
                <div className='hidden md:flex gap-1'>
                  <span>Search...</span>
                  <span className='bg-slate-500 text-sm pt-[.125rem] px-1 rounded'>
                    Ctrl+K
                  </span>
                </div>
              </div>
              <a
                href='http://github.com/radityaseptian/blog'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsGithub className='box-content p-[7px] w-5 h-5 bg-slate-400 rounded cursor-pointer' />
              </a>
              <span onClick={() => context.setTheme(!context.theme)}>
                {context.theme ? (
                  <FiSun className='box-content p-[7px] w-5 h-5 bg-slate-400 rounded cursor-pointer' />
                ) : (
                  <FaRegMoon className='box-content p-[7px] w-5 h-5 bg-slate-400 rounded cursor-pointer' />
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
        <section className='fixed inset-0 flex justify-center items-start bg-black/30 backdrop-blur-sm z-40'>
          <div className='w-11/12 md:w-10/12 lg:w-[45rem] min-h-[16rem] lg:min-h-[19rem] mt-4 sm:mt-6 md:mt-8 lg:mt-28 bg-white rounded-lg overflow-hidden overflow-y-auto'>
            <div className='flex flex-wrap gap-3 p-2 items-center bg-slate-200 border-b border-slate-400'>
              <BiSearchAlt className='box-content w-6 h-6 pl-1' />
              <input
                type='text'
                placeholder='Search article'
                maxLength={50}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                className='flex-1 py-2 bg-transparent focus:outline-none text-sm placeholder:text-black/70'
              />
              <span
                onClick={() => setShowSearch(!showSearch)}
                className='bg-red-400 text-sm px-4 py-2 rounded text-white cursor-pointer'
              >
                CLOSE
              </span>
            </div>
            <div className='p-2 flex flex-col gap-2 max-h-full'>
              <Link className='p-2 bg-slate-300 rounded flex items-center justify-between'>
                <span>Lorem ipsum dolor sit amet.</span>
                <span className='text-sm bg-slate-400 py-1 px-2 rounded'>open</span>
              </Link>
              <Link className='p-2 bg-slate-300 rounded flex items-center justify-between'>
                <span>Lorem ipsum dolor sit amet.</span>
                <span className='text-sm bg-slate-400 py-1 px-2 rounded'>open</span>
              </Link>
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
