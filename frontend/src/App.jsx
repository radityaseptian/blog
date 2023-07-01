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
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function App() {
  const [theme, setTheme] = useState(false)

  const themeDefault = {
    theme,
    setTheme,
  }
  return (
    <>
      <ThemeContext.Provider value={themeDefault}>
        <SkeletonTheme
          baseColor={theme ? '#373438' : '#fff'}
          highlightColor={theme ? '#393a3b' : '#e1e3e6'}
        >
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
        </SkeletonTheme>
      </ThemeContext.Provider>
    </>
  )
}
