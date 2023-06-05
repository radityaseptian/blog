/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from 'react'
import ToTop from '../components/ToTop'
import Navbar from '../layouts/Navbar'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import { Helmet } from 'react-helmet'

export default function ArticleDetail() {
  const { id } = useParams()
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const baseUrl = import.meta.env.VITE_URL
  const url = `${baseUrl}/article/${id}`
  const articleRef = useRef()
  useEffect(() => {
    getArticle()
  }, [])
  const getArticle = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDescription(res[0].description)
        setTitle(res[0].title)
        if (html.length == 0) {
          const url = res[0].image
          const newImg = `<center><img id='img' src="${baseUrl}/${url}" /></center>`
          res[0].article.forEach((item) => {
            if (item.includes("id='img'")) {
              return (html += newImg)
            }
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
      <Helmet>
        <meta charset='UTF-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content='News, technology, blog, programmer' />
        <meta name='author' content='Raditya Septian' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title} | Radwritter</title>
      </Helmet>
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
