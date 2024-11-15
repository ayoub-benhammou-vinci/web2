import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import Cinema from './components/Cinema'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children=[
      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"cinema",
        element: <Cinema movies={}/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
