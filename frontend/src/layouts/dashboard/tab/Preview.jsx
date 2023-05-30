import { NodeContext } from '../context/NodeContext'
import { useContext, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default function Preview() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  let html = ''
  const context = useContext(NodeContext)
  context.forEach((item) => (html += item))
  return (
    <>
      <div className='bg-slate-300 max-h-[calc(100vh-40px)] overflow-x-hidden'>
        <article
          dangerouslySetInnerHTML={{ __html: html }}
          className='mx-auto p-4 max-w-xl md:max-w-3xl min-h-screen bg-white dark:bg-zinc-700 dark:text-white transition duration-500 text-black/80 text-lg'
        ></article>
      </div>
    </>
  )
}
