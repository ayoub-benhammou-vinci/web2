import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import MoviePage from './components/Pages/MoviePage';
import CinemaPage from './components/Pages/CinemaPage';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[

      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"movies",
        element: <MoviePage/>
      }, 
      {
        path:"cinema",
        element: <CinemaPage/>
      }
      
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
