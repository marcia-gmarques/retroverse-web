import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Content from './components/Content.jsx'
import Playthrough from './components/Playthrough.jsx'
import Team from './components/Team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Content />
    <Playthrough />
    <Team />
    <App />

  </StrictMode>,
)
