import React from 'react'
import All from '../All/All'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Sidenav from '../Sidenav/Sidenav'

export default function Layout() {
  return (
    <>

<Outlet/>


<Sidenav/>

    </>
  )
}
