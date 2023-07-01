import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Content from '../layouts/Content'

import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card'
import ToTop from '../components/ToTop'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { RiArrowRightSLine } from 'react-icons/ri'
import svg from '/search.svg'
import { arrayLength } from '../helper.js'

export default function Home() {
  const [article, setArticle] = useState([])
  const baseUrl = import.meta.env.VITE_URL
  const url = `${baseUrl}/`

  useEffect(() => {
    const getArticle = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setArticle(res))
    }
    getArticle()
  }, [])

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
        <title>Radwritter | Home</title>
      </Helmet>
      <div className='bg-slate-100 dark:bg-zinc-900 dark:text-white transition duration-500'>
        <header>
          <Navbar />
          <Container>
            <section className='pt-[4.125rem] pb-10 sm:pb-0 min-h-screen grid place-content-center sm:grid-cols-2 justify-between'>
              <div className='flex flex-col justify-center relative after:py-44 after:absolute after:opacity-20 after:duration-500 after:inset-0 after:-top-24 after:dark:opacity-10 after:sm:hidden after:bg-hero after:bg-contain after:bg-center after:bg-no-repeat'>
                <h1 className='text-4xl md:text-5xl font-medium tracking-wide'>
                  radwritter<span className='text-secondary'>.blog</span>
                </h1>
                <p className='py-4'>
                  Find various interesting articles about technology and tips &
                  tricks about programming
                </p>
                <Link to='/article'>
                  <Button>Explore</Button>
                </Link>
              </div>
              <div className='mt-16 sm:mt-0'>
                <img
                  src={svg}
                  alt='Hero Image'
                  className=' lg:max-w-lg xl:max-w-xl hidden sm:block'
                />
              </div>
            </section>
          </Container>
        </header>
        <Container>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl'>Latest Article</h2>
            <Link
              to='/article'
              className='flex items-center gap-1 text-secondary'
            >
              <span>View all</span>
              <RiArrowRightSLine />
            </Link>
          </div>
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
                    time={item.time}
                  >
                    {item.description}
                  </Card>
                )
              })
            )}
          </Content>
        </Container>
        <Footer />
      </div>
    </>
  )
}
