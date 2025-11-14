import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router'
import { Homepage } from './pages/Homepage'
import FullPricePage from './pages/DetailedProductsPage'
import MainHeader from './components/layout/MainHeader'
import MainFooter from './components/layout/MainFooter'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeInit } from '../.flowbite-react/init';
import Blog from './pages/Blog'
import BlogArticles from './pages/BlogArticles'

function App() {

  return (
    <ThemeProvider>
      <ThemeInit />
      <Router>
        <MainHeader />
        <div className="text-gray-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/detailed-products" element={<FullPricePage />} /> */}
            <Route path="/blog" element={<BlogArticles />} />
            <Route path="/blog/:articleId" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <MainFooter />
      </Router>
    </ThemeProvider>
  )
}

export default App