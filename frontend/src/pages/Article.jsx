import Navbar from '../layouts/Navbar'
import Content from '../layouts/Content'
import Footer from '../layouts/Footer'

import Card from '../components/Card'
import Container from '../components/Container'
import Button from '../components/Button'
import ToTop from '../components/ToTop'

import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { arrayLength } from '../helper'

export default function Article() {
  const [article, setArticle] = useState([])
  const [count, setCount] = useState(1)
  const [button, setButton] = useState(true)
  const baseUrl = import.meta.env.VITE_URL
  const url = `${baseUrl}/article?page=${count}`
  const loadMore = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.length < 12) {
          setButton(false)
        }
        if (res.length == 0) {
          return
        }
        if (article.length == 0) {
          return setArticle(res)
        }
        setArticle([...article, ...res])
      })
  }
  useEffect(() => {
    loadMore()
  }, [count])

  return (
    <>
      <ToTop />
      <Helmet>
        <meta charset='UTF-8' />
        <meta
          name='description'
          content='Find and read article about tips and trick programming'
        />
        <meta name='keywords' content='News, technology, blog, programmer' />
        <meta name='author' content='Raditya Septian' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Radwritter | Articles</title>
      </Helmet>
      <div className='bg-slate-100 dark:bg-zinc-900 dark:text-white transition duration-500'>
        <Navbar />
        <section className='min-h-screen pt-20'>
          <Container>
            <Content>
              {article.length === 0 ? (
                <>
                  {arrayLength(12).map(() => {
                    return <Skeleton className='h-40 sm:max-w-sm' />
                  })}
                </>
              ) : (
                article.map((item) => {
                  return (
                    <Card
                      key={item._id}
                      title={item.title}
                      id={item.id}
                      tag={item.tag}
                      time={item.time}
                    >
                      {item.description}
                    </Card>
                  )
                })
              )}
            </Content>
            <center className='pt-8'>
              {button && (
                <Button onClick={() => setCount(count + 1)}>Load more</Button>
              )}
            </center>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
