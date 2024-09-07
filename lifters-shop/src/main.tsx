import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import './index.css'

// bootstrap
import './index.scss'
import * as _bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
