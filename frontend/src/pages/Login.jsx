import Navbar from '../layouts/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const url = 'http://localhost:3000/login'
  useEffect(() => {
    initLogin()
  }, [])

  const initLogin = async () => {
    fetch(url).then((res) => console.log(res))
  }

  const login = async (e) => {
    setLoading(true)
    e.preventDefault()
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == 'ok') {
          return navigate('/dashboard')
        }
        setResponse(res.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Navbar />
      <section className='grid place-content-center min-h-screen bg-slate-100 dark:bg-zinc-700 dark:text-white transition duration-500'>
        <form
          onSubmit={login}
          className='bg-white dark:bg-zinc-800 transition duration-500 text-2xl py-12 rounded'
        >
          <h2 className='py-1 pl-[52px] mb-8 border-l-4 border-secondary'>
            LOGIN
          </h2>
          <div className='flex flex-col px-14'>
            <div className='flex flex-col gap-5'>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                placeholder='Username'
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
              />
            </div>
            <span className='text-sm pt-6 pb-3 text-black/80 dark:text-white/80 transition duration-500'>
              {response}
            </span>
            <Button type='submit'>{!loading ? 'Login' : 'Wait...'}</Button>
            <div className='text-sm pt-4'>
              <span>Note: </span>
              <span className='text-black/70 dark:text-white/70 transition duration-500'>
                This login for admin only!
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
