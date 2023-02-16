import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Carousel from './components/header/Carousel'
import Social from './components/header/Social'
import Navbar from './components/header/Navbar'
import About from './components/body/About'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Social />
    <Navbar />
    <Carousel />

    {/* <App /> */}
  </React.StrictMode>,
)
