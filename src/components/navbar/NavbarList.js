import React from "react"
import {Link} from "react-router-dom"
import ButtonBox from "../ButtonBox"

function NavbarList() {

  return (
    <nav className="navbar-active">
      <ul class="navbar-list">
        <li class="navbar-list-item">
          <Link to="/">Home</Link>
        </li>
        <li class="navbar-list-item">
          <Link to="/about">About</Link>
        </li>
        <li class="navbar-list-item last-item">
          <Link to="/products">Products</Link>
        </li>
        <ButtonBox text1="Sign up" text2="Log in"/>
      </ul>
    </nav>
  )
}

export default NavbarList