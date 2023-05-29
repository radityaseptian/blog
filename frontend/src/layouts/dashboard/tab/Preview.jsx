import { NodeContext } from '../context/NodeContext'
import { useContext } from 'react'

export default function Preview() {
  let html = ''
  const context = useContext(NodeContext)
  context.forEach((item) => (html += item))
  return (
    <>
      <div className='bg-slate-300 max-h-[calc(100vh-40px)] overflow-x-hidden'>
        <article className='mx-auto px-4 max-w-xl md:max-w-3xl min-h-screen bg-slate-50 text-black/80 text-lg'>
          <h1 dangerouslySetInnerHTML={ {__html: html} }></h1>
        </article>
      </div>
    </>
  )
}
