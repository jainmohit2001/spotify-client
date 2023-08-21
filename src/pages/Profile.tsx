import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { getProfile } from '../api/Spotify'
import IProfile from '../interfaces/Profile.interface'
import { Navigate } from 'react-router-dom'

function Profile() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({} as IProfile)

  useEffect(() => {
    getProfile(localStorage.getItem('access_token') ?? '')
      .then((data: IProfile) => {
        setProfile(data)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!profile.id) {
    return <Navigate to={'/login'} />
  }

  return (
    <div>
      <p>Profile</p>
      <p>{profile.display_name}</p>
    </div>
  )
}

export default Profile
