import IProfile from '../interfaces/Profile.interface'

async function getProfile(accessToken: string): Promise<IProfile> {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  })

  const data = await response.json()
  return data
}

async function refreshAccessToken(refreshToken: string) {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? ''

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: clientId,
  })

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  })
  const data = await response.json()
  return data
}

export { getProfile, refreshAccessToken }
