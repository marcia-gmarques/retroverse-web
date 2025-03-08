import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Content from './components/Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Content />
    <App />

  </StrictMode>,
)
