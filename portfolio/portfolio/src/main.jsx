import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hero } from './components/Hero'
import { Main } from './components/Main'
import './styles.css'
import Habilidades from './components/Habilidades'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Main />
    <Habilidades />
  </React.StrictMode>,
)
