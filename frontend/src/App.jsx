import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import ArticleDetail from './pages/ArticleDetail'
import Tag from './pages/Tag'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import TagId from './pages/TagId'
import { useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
export default function App() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || false
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme(false)
    }
  }, [])

  const themeDefault = {
    theme,
    setTheme,
  }
  return (
    <>
      <ThemeContext.Provider value={themeDefault}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='article' element={<Article />} />
            <Route path='article/:id' element={<ArticleDetail />} />
            <Route path='tag' element={<Tag />} />
            <Route path='tag/:slug' element={<TagId />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}
