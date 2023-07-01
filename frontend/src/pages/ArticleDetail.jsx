import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

import ToTop from '../components/ToTop'

import { useParams } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import { Helmet } from 'react-helmet'
import { arrayLength } from '../helper'
import Skeleton from 'react-loading-skeleton'

export default function ArticleDetail() {
  const { id } = useParams()
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const baseUrl = import.meta.env.VITE_URL
  const url = `${baseUrl}/article/${id}`
  const articleRef = useRef()
  let html = ''

  useEffect(() => {
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
    getArticle()
  }, [])

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
        <div className='min-h-screen mx-auto max-w-xl md:max-w-3xl pt-20'>
          {!title && !description && (
            <div className='p-4'>
              <Skeleton className='h-10' />
              <Skeleton className='mt-4 h-10 w-56' />
              <div className='flex gap-10 pt-10'>
                <Skeleton className='w-24' />
                <Skeleton className='w-32' />
              </div>
              <div className='py-6'>
                <Skeleton className='h-72' />
              </div>
              <Skeleton count={8} />
            </div>
          )}
          <article
            ref={articleRef}
            className='p-4 dark:text-white duration-500 text-black/80 text-lg'
          ></article>
        </div>
        <Footer />
      </div>
    </>
  )
}
