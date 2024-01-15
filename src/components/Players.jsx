import React, { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'
import { reducerCases } from '../utils/Constants'

const Players = () => {
  const [{ token, playlists }, dispatch] = useStateProvider()

  useEffect(() => {
    const getPlayListData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });

        const { items } = response.data;
        const Playlists = items.map(({ name, id }) => ({ name, id }));

        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists: Playlists });

      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };

    getPlayListData();
  }, [token, dispatch]);

  return (
    <div>
      <ul>
        {playlists?.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Players
