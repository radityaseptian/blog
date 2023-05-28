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
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'
export default function App() {
  const [theme, setTheme] = useState(false)
  const value = {
    theme,
    setTheme,
  }
  return (
    <>
      <ThemeContext.Provider value={value}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='article' element={<Article />} />
            <Route path='article/:id' element={<ArticleDetail />} />
            <Route path='tag' element={<Tag />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}
