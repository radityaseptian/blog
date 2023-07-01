import Navbar from '../layouts/Navbar'
import Content from '../layouts/Content'
import Footer from '../layouts/Footer'

import ToTop from '../components/ToTop'
import Card from '../components/Card'
import Container from '../components/Container'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { arrayLength } from '../helper'
import Skeleton from 'react-loading-skeleton'

export default function TagId() {
  const [article, setArticle] = useState([])
  const { slug } = useParams()
  const baseUrl = import.meta.env.VITE_URL
  const url = `${baseUrl}/tag/${slug}`

  useEffect(() => {
    getTagId()
  }, [])

  const getTagId = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setArticle(res))
  }

  return (
    <>
      <ToTop />
      <Navbar />
      <div className='bg-slate-100 dark:bg-zinc-900 duration-500 dark:text-white text-black pt-20'>
        <div className='min-h-screen'>
          <Container>
            <Content>
              {article.length === 0 ? (
                <>
                  {arrayLength(8).map(() => {
                    return <Skeleton className='h-40 sm:max-w-sm' />
                  })}
                </>
              ) : (
                article.map((item) => {
                  return (
                    <Card
                      key={item._id}
                      title={item.title}
                      tag={item.tag}
                      id={item._id}
                      time={item.time}
                    >
                      {item.description}
                    </Card>
                  )
                })
              )}
            </Content>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  )
}
