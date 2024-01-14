import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login.jsx'

const App = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash){
      const token = hash.substring(1).split('&')[0].split('=')[1];
      console.log(token)
    }
  }, [])
  return (
    <div>
      <Login />
    </div>
  )
}

export default App
