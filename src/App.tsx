import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router'
import { Homepage } from './pages/Homepage'
import FullPricePage from './pages/DetailedProductsPage'
import EmeraldBackground from './components/EmeraldBackground'
import MainHeader from './components/layout/MainHeader'
import MainFooter from './components/layout/MainFooter'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeInit } from '../.flowbite-react/init';

function App() {

  return (
    <ThemeProvider>
      <ThemeInit />
      <Router>
        <EmeraldBackground />
        <MainHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detailed-products" element={<FullPricePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <MainFooter />
      </Router>
    </ThemeProvider>
  )
}

export default App