import { useState,useEffect,useContext } from 'react'
import Editor from './tab/Editor'
import Preview from './tab/Preview'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../context/ThemeContext'

export default function Create() {
  const [tab, setTab] = useState(1)
  const context = useContext(ThemeContext)
  useEffect(() => {
    if (context.theme) {  
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [context.theme])
  return (
    <>
      <nav>
        <ul className='flex'>
          <li
            onClick={() => setTab(1)}
            className={`${
              tab == 1 ? 'bg-red-300' : 'bg-white'
            } py-2 px-8 cursor-pointer`}
          >
            Editor
          </li>
          <li
            onClick={() => setTab(2)}
            className={`${
              tab == 2 ? 'bg-slate-300' : 'bg-white'
            } py-2 px-8 cursor-pointer`}
          >
            Preview
          </li>
          {tab == 2 && (
            <li
              onClick={() => context.setTheme(!context.theme)}
              className='px-4 mx-1 cursor-pointer bg-slate-300 flex items-center'
            >
              {context.theme ? <FiSun /> : <FaRegMoon />}
            </li>
          )}
        </ul>
      </nav>
      {tab == 1 && <Editor />}
      {tab == 2 && <Preview />}
    </>
  )
}
