import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../src/App.css'

import Navbar from '../components/Navbar'

export default function Main() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
