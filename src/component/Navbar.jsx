import React from 'react'
import { NavLink as Navlink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-capitalize sticky-top text-white">
  <div className="container text-white ">
  
    <Navlink className="navbar-brand text-white me-5" to="/"> <h1>Start Framework</h1></Navlink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex flex-row justify-content-end align-items-center gap-4">
        <li className="nav-item ">
          <Navlink className="nav-link  text-white" aria-current="page" to="/about">About</Navlink>
        </li>
        <li className="nav-item">
          <Navlink className="nav-link text-white" aria-current="page" to="/contact">contact</Navlink>
        </li>
        <li className="nav-item">
          <Navlink className="nav-link text-white" aria-current="page" to="/portfolio">Portfolio</Navlink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
