/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className='bg-white dark:bg-zinc-800 transition duration-500 py-6 mt-10'>
        <Container>
          <section className='grid sm:grid-cols-2'>
            <div className='text-center sm:text-left pb-6'>
              <h6>
                Radwritter<span>.blog</span>
              </h6>
              <p className='py-4 pb-2 text-sm text-white/80'>
                Find information, articles, tips & tricks and tutorials about
                programming.
              </p>
              <p className='text-sm pb-5 text-white/80'>&copy; 2023 Radwritter</p>
              <Link
                to='/login'
                className='px-3 py-2 border-secondary border-[1.9px] text-secondary hover:bg-black/5 rounded'
              >
                Login
              </Link>
            </div>
            <div className='text-center sm:text-left sm:pl-4'>
              <h6>Newsletter</h6>
              <p className='pt-3 pb-4 text-sm text-white/80'>
                Get the latest information and articles from Technology.com by
                subscribing to the Newsletter directly to your email.
              </p>
              <div className='flex gap-1 md:gap-3 justify-center sm:justify-start'>
                <input
                  type='email'
                  id='email'
                  className='px-2 sm:w-48 md:w-60 rounded border text-sm border-slate-400 bg-slate-50 dark:bg-zinc-900 transition duration-500'
                  placeholder='Enter your email...'
                />
                <Button>Subscribe</Button>
              </div>
              <div className='flex gap-5 pt-4 justify-center sm:justify-start'>
                <a href='#'>
                  <FaFacebookSquare className='w-5 h-5' />
                </a>
                <a href='#'>
                  <FaInstagram className='w-5 h-5' />
                </a>
                <a href='#'>
                  <FaTwitter className='w-5 h-5' />
                </a>
                <a href='#'>
                  <FaGithub className='w-5 h-5' />
                </a>
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  )
}
