import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Carousel from './components/header/Carousel'
import Social from './components/header/Social'
import Navbar from './components/header/Navbar'
import About from './components/body/About'
import Bigdata from './components/body/Bigdata'
import Advantages from './components/body/Advantages'
import Contact from './components/body/Contact'
import Companies from './components/body/Companies'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Social />
    <Navbar />
    <Carousel />
    <About />
    <Bigdata />
    <Advantages />
    <Contact />
    <Companies />
    <Footer />
  </React.StrictMode>,
)
