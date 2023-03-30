import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import GlobalStyle from './utils/styles/GlobalStyle'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>      
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
