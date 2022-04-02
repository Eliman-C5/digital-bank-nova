import React, {useState, useEffect, Fragment} from 'react';
import navbarImage from '../../assets/icon-hamburger.svg';
import navbarClose from '../../assets/icon-close-menu.svg';
import NavbarList from "./NavbarList"

function Navbar() {

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    localStorage.setItem("navbar", navbar)
    console.log("Hago click en el navbar")

    if (navbar) {
      document.querySelector("body").classList.add("scroll")
    } else {
      document.querySelector("body").classList.remove("scroll")
    }
  }, [navbar])

  if (navbar) {
      return (
        <Fragment>
          <NavbarList />
          {<nav className="navbar">
            <span className="title">Nova</span>
            <img 
              className="hamburger-menu"
              src={navbar? navbarClose : navbarImage} 
              alt="hamburger-menu" 
              onClick={() => setNavbar(!navbar)} />
          </nav>}
        </Fragment>
      )
  }

  return (
    <nav className="navbar">
      <span className="title">Nova</span>
      <img 
        className="hamburger-menu"
        src={navbar? navbarClose : navbarImage} 
        alt="hamburger-menu" 
        onClick={() => setNavbar(!navbar)} />
    </nav>
  )
}

export default Navbar;