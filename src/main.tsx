import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './app/globals.css'
import "animate.css"
import "./styles/globals.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
