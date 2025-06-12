import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css'
import App from './apps/App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
