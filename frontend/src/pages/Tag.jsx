import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

import Container from '../components/Container'
import TagContent from '../components/TagContent'
import ToTop from '../components/ToTop'

import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { arrayLength } from '../helper'

export default function Tag() {
  const [tag, setTag] = useState([])
  const baseUrl = import.meta.env.VITE_URL
  const url = `${baseUrl}/tag`

  useEffect(() => {
    getTag()
  }, [])

  const getTag = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const keys = Object.keys(res)
        const newTags = keys.map((key) => ({ key: key, count: res[key] }))
        setTag([...tag, ...newTags])
      })
  }

  return (
    <>
      <ToTop />
      <Helmet>
        <meta charset='UTF-8' />
        <meta
          name='description'
          content='Find articles more easily with the topic tags you like, Here are the tags & topics you might like'
        />
        <meta name='keywords' content='News, technology, blog, programmer' />
        <meta name='author' content='Raditya Septian' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Radwritter | Tags</title>
      </Helmet>
      <Navbar />
      <div className='bg-slate-100 dark:bg-zinc-900 dark:text-white transition duration-500'>
        <section className='min-h-screen pt-20 md:pt-24'>
          <Container>
            <div>
              <h1 className='text-2xl md:text-3xl'>Tags</h1>
              <p className='text-sm pt-3'>
                Find articles more easily with the topic tags you like, Here are
                the tags & topics you might like...
              </p>
              <div className='flex gap-3 flex-wrap pt-8'>
                {tag.length === 0 ? (
                  <>
                    {arrayLength(8).map(() => {
                      return <Skeleton className='h-9 w-24' />
                    })}
                  </>
                ) : (
                  tag.map((item, i) => {
                    return (
                      <TagContent key={i} count={item.count}>
                        {item.key}
                      </TagContent>
                    )
                  })
                )}
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
