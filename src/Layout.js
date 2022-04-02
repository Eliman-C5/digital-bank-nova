import React from "react"
import {Outlet} from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const Layout = () => {
  return (
    <div className="layout-body">
        <Navbar />
        <div className="container">
          <Outlet />
          <Footer />
        </div>
      </div>
  )
}

export default Layout