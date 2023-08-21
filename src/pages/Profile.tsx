import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { Navigate, useNavigate } from 'react-router-dom'
import useProfile from '../hooks/profile.hook'

function Profile() {
  const { profile, status } = useProfile()
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')

    return navigate('/')
  }

  useEffect(() => {
    if (status === 'authenticated') {
      document.title = `${profile.display_name} - Spotify Client`
    }
  }, [profile])

  if (status === 'loading') {
    return <Loading />
  } else if (status === 'unauthenticated') {
    return <Navigate to={'/login'} />
  }

  if (!profile.id) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className='flex flex-col'>
      <div className='ml-auto flex gap-2'>
        <button className='btn btn-nav btn-danger' onClick={signOut}>
          Sign Out
        </button>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-shrink flex-col items-center justify-center gap-2'>
          {profile.images.length > 0 && (
            <img
              src={profile.images[0].url}
              height={profile.images[0].height}
              width={profile.images[0].width}
              className='rounded-full'
            />
          )}
          <p className='text-lg font-medium'>{profile.display_name}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
