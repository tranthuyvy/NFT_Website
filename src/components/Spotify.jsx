import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/Constants'
import '../styles/Spotify.scss'

const Spotify = () => {
  const [{ token }, dispatch] = useStateProvider()
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      console.log(data)
      const userInfo = {
        userId: data?.id,
        userName: data?.display_name,
      }
      console.log(userInfo)
      dispatch({ type: reducerCases.SET_USER, userInfo })
    }
    getUserInfo()
  }, [token, dispatch])

  return (
    <div className='spotify_container'>
      <div className='spotify_body'>
        <Sidebar />
        <div className='body'>
          <Navbar />
          <div className='body_contents'>
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </div>
  )
}

export default Spotify
