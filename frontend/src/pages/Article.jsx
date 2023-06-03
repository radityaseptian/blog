/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '../layouts/Navbar'
import Content from '../layouts/Content'
import Card from '../components/Card'
import Container from '../components/Container'
import Footer from '../layouts/Footer'
import Button from '../components/Button'
import ToTop from '../components/ToTop'
import { useState, useEffect } from 'react'

export default function Article() {
  const [article, setArticle] = useState([])
  const [count, setCount] = useState(1)
  const [button, setButton] = useState(true)
  const url = `http://localhost:3000/article?page=${count}`
  const loadMore = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.length == 0) {
          return setButton(false)
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
      <div className='bg-slate-100 dark:bg-zinc-700 dark:text-white transition duration-500'>
        <Navbar />
        <section className='min-h-screen pt-20'>
          <Container>
            <Content>
              {article &&
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
                })}
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
