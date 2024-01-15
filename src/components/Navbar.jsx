/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useStateProvider } from '../utils/StateProvider'
import '../styles/Navbar.scss'

const Navbar = () => {
  const [{ userInfo }] = useStateProvider()
  return (
    <div className='navbar_container'>
      <div className='search_bar'>
        <FaSearch />
        <input type="text" placeholder='Search...' />
      </div>
      <div className='avatar'>
        <a
          href="#"
        >
          <IoMdPerson />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar
