import React from 'react'
import { RiHomeSmileFill } from "react-icons/ri";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Players from './Players';
import '../styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <div className='top_links'>
        <div className='logo'>
          <img src='https://gucongnghe.com/wp-content/uploads/2019/08/Spotify.jpg' alt='Spotify' />
        </div>
        <ul>
          <li>
            <RiHomeSmileFill />
            <span>Home</span>
          </li>
          <li>
            <IoMdSearch />
            <span>Search</span>
          </li>
          <li>
            <MdOutlineLibraryMusic />
            <span>Your Lyrik</span>
          </li>
        </ul>
      </div>
      <Players />
    </div>
  )
}

export default Sidebar
