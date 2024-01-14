import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-context: center;
  align-items:center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
  }
`

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
    <Container>
      <img src='https://img.icons8.com/ios-filled/250/spotify.png' alt='Spotify' />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

export default Login
