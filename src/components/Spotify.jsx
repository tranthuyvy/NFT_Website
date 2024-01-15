import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import '../styles/Spotify.scss'

const Spotify = () => {
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
