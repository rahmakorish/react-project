import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className='text-center text-white'>
    <div className='footer-content container-fluid d-flex justify-content-around g-4 p-5 mx-auto'>
    <div>
        <h2>LOCATION</h2>
        <p>5 whhyyyy street Giza, Cairo</p>
    </div>
    <div>
        <h2>AROUND THE WEB</h2>
        <div className="footer-links">
            <a href="http://facebook.com"><i className="fa fa-brands fa-facebook fa-md mx-1 p-2 fa-border border-dark rounded-circle"></i></a>
            <a href="http://"  rel="noopener noreferrer"><i className="fa fa-brands fa-twitter fa-md mx-1  p-2 border border-dark rounded-circle"></i></a>
            <a href="http://"  rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-md mx-1  p-2 border border-dark rounded-circle"></i></a>
            <a href="http://"  rel="noopener noreferrer"><i className="fa fa-brands fa-youtube fa-md mx-1 p-2  border border-dark rounded-circle"></i></a>
        </div>
    </div>
    <div>
        <h2>ABOUT FREELANCER</h2>
        <p>Freelancer is a free bootstrap theme created by rahma korish</p>
    </div>
    </div>
      <div className='copyrights container-fluid py-3 mx-auto'>
      <p className='mb-0'>© 2025 React Framework. All rights reserved.</p>
      <p className='mb-0'>Designed by Rahma Korish</p>  
      </div>   
        </footer>
  )
}
