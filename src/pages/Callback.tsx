import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import TokenResponse from '../interfaces/TokenResponse.interface'

function CallBack() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? ''
  const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI ?? ''
  const urlParams = new URLSearchParams(window.location.search)
  const code: string = urlParams.get('code') ?? ''

  const codeVerifier: string = localStorage.getItem('code_verifier') ?? ''

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier,
  })

  useEffect(() => {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status)
        }
        return response.json()
      })
      .then((data: TokenResponse) => {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)

        navigate('/profile')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  return <></>
}

export default CallBack
