/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react'
import ToTop from '../components/ToTop'
import Navbar from '../layouts/Navbar'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default function ArticleDetail() {
  const { id } = useParams()
  const url = `http://localhost:3000/article/${id}`
  const articleRef = useRef()
  useEffect(() => {
    getArticle()
  }, [])
  const getArticle = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (html.length == 0) {
          res[0].article.forEach((item) => {
            html += item
          })
        }
      })
      .finally(() => {
        articleRef.current.innerHTML = html
        Prism.highlightAll()
      })
  }
  let html = ''

  return (
    <>
      <ToTop />
      <Navbar />
      <div className=' bg-slate-50 dark:bg-zinc-900 duration-500 dark:text-white'>
        <div className='min-h-screen pt-20'>
          <article
            ref={articleRef}
            className='mx-auto p-4 max-w-xl md:max-w-3xl min-h-screen dark:text-white transition duration-500 text-black/80 text-lg'
          ></article>
        </div>
        <Footer />
      </div>
    </>
  )
}
