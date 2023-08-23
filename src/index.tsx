import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error'
import Header from './components/Header'
import Playlists from './pages/Playlists'
import PlaylistDetails from './pages/PlaylistDetails'
import WebPlayback from './components/WebPlayback'

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <WebPlayback />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/error',
        element: <ErrorPage />,
      },
      {
        path: '/playlists',
        element: <Playlists />,
      },
      {
        path: '/playlist/:playlistId',
        element: <PlaylistDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
