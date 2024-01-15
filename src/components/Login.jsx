import React from 'react'
import '../styles/Login.scss'

const Login = () => {
  const handleClick = () => {
    const client_id = '667143ad38064a298e9d8d686a1aadff'
    const redirect_url = "http://localhost:3000/";
    const api_url = 'http://accounts.spotify.com/authorize'
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ]
    window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }

  return (
    <div className='container'>
      <img src='https://img.icons8.com/ios-filled/250/spotify.png' alt='Spotify' />
      <button onClick={handleClick}>Connect Spotify</button>
    </div>
  )
}

export default Login
