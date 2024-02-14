import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Spinner from './Spinner'

export default function Header({isLoggedIn}) {
  const [buttonName, setButtonName] = useState(null)
  useEffect(()=>{
    const token = localStorage.getItem('tokenId')
    if(isLoggedIn){
      setButtonName('Logout')
    }else{
      setButtonName('Login')
    }
  },[isLoggedIn])
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid topbar-top bg-primary">
        <div className="container">
          <div className="d-flex justify-content-between topbar py-2">
            <div className="d-flex align-items-center flex-shrink-0 topbar-info">
              <a href="#" className="me-4 text-secondary"><i className="fas fa-map-marker-alt me-2 text-dark" />123 Street, CA, USA</a>
              <a href="#" className="me-4 text-secondary"><i className="fas fa-phone-alt me-2 text-dark" />+01234567890</a>
              <a href="#" className="text-secondary"><i className="fas fa-envelope me-2 text-dark" />Example@gmail.com</a>
            </div>
            <div className="text-end pe-4 me-4 border-end border-dark search-btn">
              <div className="search-form">
                <form method="post" action="index.html">
                  <div className="form-group">
                    <div className="d-flex">
                      <input type="search" className="form-control border-0 rounded-pill" name="search-input" placeholder="Search Here" required />
                      <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark" /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center topbar-icon">
              <a href="#" className="me-4"><i className="fab fa-facebook-f text-dark" /></a>
              <a href="#" className="me-4"><i className="fab fa-twitter text-dark" /></a>
              <a href="#" className="me-4"><i className="fab fa-instagram text-dark" /></a>
              <a href="#" className><i className="fab fa-linkedin-in text-dark" /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid bg-dark">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
            <NavLink className="navbar-brand" to="/">
              <><h1 className="text-primary mb-0 display-5">React<span className="text-white">Project</span></h1></>
            </NavLink>
            <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars text-dark" />
            </button>
            <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" activeClassName="active" to="/about">About</NavLink>
                {/* <span className="nav-item nav-link"><NavLink activeClassName="active" to="/">Services</NavLink></span>
                <span className="nav-item nav-link"><NavLink activeClassName="active" to="/">Projects</NavLink></span> */}
                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" activeClassName="active" to="/pages">Pages</NavLink>
                  <div className="dropdown-menu m-0 bg-primary">
                    <NavLink className="dropdown-item" activeClassName="active" to="/pages/pricing">Pricing Plan</NavLink>
                    {/* <NavLink className="dropdown-item" activeClassName="active" to="/">Blog Post</NavLink>
                    <NavLink className="dropdown-item" activeClassName="active" to="/">Team Members</NavLink>
                    <NavLink className="dropdown-item" activeClassName="active" to="/">Testimonial</NavLink> */}
                    <NavLink className="dropdown-item" activeClassName="active" to="/pages/error">404 Page</NavLink>
                  </div>
                </div>
                <NavLink className="nav-item nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink className="nav-item nav-link" activeClassName="active" to="/table">Table</NavLink>
                <NavLink className="nav-item nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                <NavLink className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown" to="/login">{buttonName}</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  )
}
