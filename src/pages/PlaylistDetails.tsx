import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSpotify } from '../hooks/useSpotify'
import { Playlist, Scopes } from '@spotify/web-api-ts-sdk'
import Loading from '../components/Loading'

function PlaylistDetails() {
  const sdk = useSpotify(Scopes.playlistRead)
  const { playlistId } = useParams()
  const [playlist, setPlaylist] = useState({} as Playlist)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (playlistId && sdk) {
      sdk?.playlists
        .getPlaylist(playlistId)
        .then((data) => {
          console.log(data)
          document.title = data.name
          setPlaylist(data)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [sdk, playlistId])

  if (loading) {
    return <Loading />
  }

  if (!playlist) {
    return <div>Playlist not found</div>
  }

  return (
    <div className='mx-auto flex w-11/12 flex-col md:w-8/12 xl:w-6/12'>
      <div className='flex flex-row gap-4'>
        {playlist.images.length > 0 && (
          <img
            src={playlist.images[0].url}
            className='flex w-6/12 rounded-lg sm:w-4/12 xl:w-3/12'
          />
        )}
        <div className='flex flex-col justify-end gap-2 py-2'>
          <p className='text-xs font-medium'>
            {playlist.public ? 'Public ' : 'Private '}Playlist
          </p>
          <p className='mb-2 text-3xl font-bold'>{playlist.name}</p>
          <p className='text-xs font-medium'>
            {playlist.owner.display_name} • {playlist.followers.total} likes •{' '}
            {playlist.tracks.total} songs
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlaylistDetails
