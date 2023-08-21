import React, { useEffect } from 'react'
import {
  generateCodeChallenge,
  generateRandomString,
} from '../utils/spotify-auth'

function Login() {
  const codeVerifier = generateRandomString(128)
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? ''
  const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI ?? ''

  useEffect(() => {
    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      const state = generateRandomString(16)
      const scope = 'user-read-private user-read-email'

      localStorage.setItem('code_verifier', codeVerifier)

      const args = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
      })

      window.location.assign('https://accounts.spotify.com/authorize?' + args)
    })
  }, [])

  return <></>
}
export default Login
