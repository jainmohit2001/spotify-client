import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4'>
      <div className='flex items-center justify-center'>
        <img src={'./spotify-logo.svg'} width={64} height={64}></img>
      </div>
      <p className='text-3xl font-bold'>Spotify Client</p>
      <Link className='btn btn-green' to={'/login'}>
        Login
      </Link>
    </div>
  )
}

export default App
