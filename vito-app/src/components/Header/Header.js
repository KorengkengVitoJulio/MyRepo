import React from 'react'
import Aos from 'aos'
function Header() {
  return (
    <header className="header" id="home">
    <div className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <ul className="social-icons pt-3">
        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-facebook" aria-hidden="true" /></a></li>
        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter" aria-hidden="true" /></a></li>
        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google" aria-hidden="true" /></a></li>
        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-instagram" aria-hidden="true" /></a></li>
        <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true" /></a></li>
      </ul>  
      <div className="header-content" >
        <h4 className="header-subtitle">Hello, I am</h4>
        <h1 className="header-title">Vito Julio Korengkeng</h1>
        <h6 className="header-mono">Student Faculty Of Computer Science, Informatic </h6>

      </div>
    </div>
  </header>
  )
}

export default Header