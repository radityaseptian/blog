import ToTop from '../components/ToTop'
import Navbar from '../layouts/Navbar'
import Content from '../layouts/Content'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Container from '../components/Container'
import Footer from '../layouts/Footer'

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
              {article &&
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
                })}
            </Content>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  )
}
