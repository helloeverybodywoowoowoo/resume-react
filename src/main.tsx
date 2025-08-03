import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
//in AI im gonna ask how to add and remove prodcutts from the ecom page in code like i would in postman, go piece by piece 