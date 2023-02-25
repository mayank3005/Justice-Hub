import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from '../images/logo.png'

const Navbar = () => {
  return (<>
    <div className=" container-fluid nav-bg">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-light px-4">
            <div className="container-fluid">
              {/* <NavLink to='/' className='navbar-brand'>
                Yoichi Isagi</NavLink> */}
              <a className="navbar-brand" href="/">
                <img src={LogoImg} width="60" height="60" alt="" />
              </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                  <li className="nav-item mx-3">
                    <NavLink aria-current="page" to='/'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      HOME</NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink to='/getinvolved'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      GET INVOLVED</NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink to='/about'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      ABOUT</NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink to='/newsletter'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      NEWSLETTER</NavLink>
                  </li>
                </ul>
                <div className="nav-item donate-item d-flex align-items-center px-2 mx-2">
                  <NavLink to='/donate' style={{ 'color': 'white' }}
                    className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                    DONATE</NavLink>
                </div>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-3">
                    <NavLink aria-current="page" to='/register'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      Register</NavLink>
                  </li>
                  <li className="nav-item mx-3">
                    <NavLink aria-current="page" to='/login'
                      className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                      Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr />
        </div>
      </div>
    </div>
  </>);
}

export default Navbar;