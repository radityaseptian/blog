import Navbar from '../layouts/Navbar'
import Container from '../components/Container'
import Footer from '../layouts/Footer'
import TagContent from '../components/TagContent'
import ToTop from '../components/ToTop'

export default function Tag() {
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
                <TagContent count={2}>linux</TagContent>
                <TagContent count={2}>npm</TagContent>
                <TagContent count={2}>javascript</TagContent>
                <TagContent count={2}>nodejs</TagContent>
                <TagContent count={2}>css</TagContent>
              </div>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  )
}
