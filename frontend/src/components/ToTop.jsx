import { useEffect } from 'react'
export default function ToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}
