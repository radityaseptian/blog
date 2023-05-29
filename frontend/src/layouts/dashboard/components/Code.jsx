/* eslint-disable react/prop-types */
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import { useEffect } from 'react'
export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className='Code pt-2'>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
