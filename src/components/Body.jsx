import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/Constants'
import axios from 'axios';
import '../styles/Body.scss'

const Body = () => {
  const [{ token, selectedPlayListId, selectedPlayList }, dispatch] = useStateProvider()

  useEffect(() => {
    const getInitalPlayList = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlayListId}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      const selectedPlayList = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a") ? "" : response.data.description,
        image: response.data.images[1].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number
        }))
      }
      console.log(selectedPlayList)
      dispatch({ type: reducerCases.SET_PLAYALIST, selectedPlayList })
    }
    getInitalPlayList()
  }, [token, dispatch, selectedPlayListId])

  console.log("Selec", selectedPlayList)
  return (
    <div className='body_container'>
      {selectedPlayList && (
        <>
          <div className='playlist'>
            <div className='image'>
              <img src={selectedPlayList.image} alt='playlistimage' />
            </div>
            <div className='details'>
              <h1 className='title'>{selectedPlayList.name}</h1>
              <p className='description'>{selectedPlayList.description}</p>
            </div>
          </div>

          <div className='tracklist'>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Album</th>
                  <th>Date Added</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {selectedPlayList.tracks.map((track) => (
                  <tr key={track.id}>
                    <td className='track-detail-container'>
                      <img src={track.image} alt='trackimage' />
                      <div className='track-details'>
                        <h3 style={{ marginLeft: "15px" }}>{track.album}</h3>
                        <p style={{ marginLeft: "15px" }}>{track.artists.join(', ')}</p>
                      </div>
                    </td>
                    <td>{track.name}</td>
                    <td>9 hour ago</td>
                    <td>2:50</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

export default Body
