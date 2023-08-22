import React, { useEffect, useState } from 'react'
import { useSpotify } from '../hooks/useSpotify'
import { Scopes, SimplifiedPlaylist } from '@spotify/web-api-ts-sdk'
import Loading from '../components/Loading'

function Playlists() {
  const sdk = useSpotify(Scopes.playlistRead)
  const [playlists, setPlaylists] = useState([] as SimplifiedPlaylist[])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sdk?.currentUser.playlists
      .playlists()
      .then((data) => {
        setPlaylists(data.items)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [sdk])

  if (loading) {
    return <Loading />
  }

  return sdk ? (
    <div>
      {Object.entries(playlists).map(([key, value]) => {
        return PlaylistEntry(key, value)
      })}
    </div>
  ) : (
    <></>
  )
}

function PlaylistEntry(key: string, obj: SimplifiedPlaylist) {
  return <div key={key}>{obj.name}</div>
}

export default Playlists
