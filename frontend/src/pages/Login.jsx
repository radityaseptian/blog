import Navbar from '../layouts/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login() {

  const login = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <section className='grid place-content-center min-h-screen bg-slate-100 dark:bg-zinc-700 dark:text-white transition duration-500'>
        <form onSubmit={login} className='bg-white dark:bg-zinc-800 transition duration-500 text-2xl py-12 rounded'>
          <h2 className='py-1 pl-[52px] mb-8 border-l-4 border-secondary'>
            LOGIN
          </h2>
          <div className='flex flex-col px-14'>
            <div className='flex flex-col gap-5'>
              <Input type='text' placeholder='Username' />
              <Input type='password' placeholder='Password' />
            </div>
            <span className='text-sm pt-6 pb-3 text-black/80 dark:text-white/80 transition duration-500'>
              username or password not correct!
            </span>
            <Button type='submit'>Login</Button>
            <div className='text-sm pt-4'>
              <span>Note: </span>
              <span className='text-black/70 dark:text-white/70 transition duration-500'>This login for admin only!</span>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
