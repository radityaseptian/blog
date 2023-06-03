import Navbar from '../layouts/Navbar'
import Container from '../components/Container'
import Footer from '../layouts/Footer'
import TagContent from '../components/TagContent'
import ToTop from '../components/ToTop'
import { useEffect, useState } from 'react'

export default function Tag() {
  const [tag, setTag] = useState([])
  const url = 'http://localhost:3000/tag'

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
      <Navbar />
      <div className='bg-slate-100 dark:bg-zinc-700 dark:text-white transition duration-500'>
        <section className='min-h-screen pt-20 md:pt-24'>
          <Container>
            <div>
              <h1 className='text-2xl md:text-3xl'>Tags</h1>
              <p className='text-sm pt-3'>
                Find articles more easily with the topic tags you like, Here are
                the tags & topics you might like...
              </p>
              <div className='flex gap-3 flex-wrap pt-8'>
                {tag &&
                  tag.map((item, i) => {
                    return (
                      <TagContent key={i} count={item.count}>
                        {item.key}
                      </TagContent>
                    )
                  })}
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
