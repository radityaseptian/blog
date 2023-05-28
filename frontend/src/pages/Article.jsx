import Navbar from '../layouts/Navbar'
import Content from '../layouts/Content'
import Card from '../components/Card'
import Container from '../components/Container'
import Footer from '../layouts/Footer'
import Button from '../components/Button'
import ToTop from '../components/ToTop'
// import { useState } from 'react'

export default function Article() {
  // const [article, setArticle] = useState([])

  // const loadMore = () => {
  // fetch
  // }

  return (
    <>
      <ToTop />
      <div>
        <Navbar />
        <section className='min-h-screen pt-20'>
          <Container>
            <Content>
              <Card
                href={'/article/lorem'}
                read={'7 min read'}
                tag={{ name: 'Bash', href: '/tag/bash' }}
                title={'How to create github'}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Card>
            </Content>
            <center className='pt-8'>
              <Button>Load more</Button>
            </center>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
