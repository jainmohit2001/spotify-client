import { useEffect, useState } from 'react'
import IProfile from '../interfaces/Profile.interface'
import { getProfile } from '../api/Spotify'

type ProfileApiStatus = 'loading' | 'authenticated' | 'unauthenticated'

function useProfile() {
  const [profile, setProfile] = useState({} as IProfile)
  const [status, setStatus] = useState('loading' as ProfileApiStatus)

  useEffect(() => {
    // Check if access_token is present or not
    if (localStorage.getItem('access_token') === null) {
      setStatus('unauthenticated')
      return
    }

    getProfile(localStorage.getItem('access_token') ?? '')
      .then((data: IProfile) => {
        setProfile(data)
        localStorage.setItem('profile', JSON.stringify(data))
        setStatus('authenticated')
      })
      .catch(() => {
        setStatus('unauthenticated')
      })
  }, [])

  return { profile, status }
}

export default useProfile
