import Navbar from '../layouts/Navbar'
import Container from '../components/Container'
import Button from '../components/Button'
import Footer from '../layouts/Footer'
import svg from '../../public/search.svg'
import Content from '../layouts/Content'
import Card from '../components/Card'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ToTop from '../components/ToTop'

export default function Home() {
  return (
    <>
      <ToTop />
      <header>
        <Navbar />
        <Container>
          <section className='pt-[4.125rem] pb-10 sm:pb-0 min-h-screen grid place-content-center sm:grid-cols-2 justify-between'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-4xl md:text-5xl'>
                Technology<span className='text-secondary'>.com</span>
              </h1>
              <p className='py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                expedita autem! Consequuntur
              </p>
              <span>
                <Button>Explore</Button>
              </span>
            </div>
            <div className='mt-16 sm:mt-0'>
              <img
                src={svg}
                alt='Hero Image'
                className=' lg:max-w-lg xl:max-w-xl'
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
          <Card
            href={'/article/lorem'}
            read={'3 min read'}
            tag={{ name: 'Bash', href: '/tag/bash' }}
            title={'How to create github'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Card>
        </Content>
      </Container>
      <Footer />
    </>
  )
}
