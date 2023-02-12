import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Carousel from './components/header/Carousel'
import Navbar from './components/header/Navbar'
import About from './components/body/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    {/* <Carousel /> */}

    {/* <App /> */}
  </React.StrictMode>,
)
