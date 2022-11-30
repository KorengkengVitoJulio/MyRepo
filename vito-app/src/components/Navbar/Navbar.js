import React from 'react'

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top={510}>
    <div className="container">
      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">Resume</a>
          </li>
        </ul>
        <ul className="navbar-nav brand">
          <img src="assets/imgs/avatar.jpg" alt className="brand-img" />
          <li className="brand-txt">
            <h5 className="brand-title">Vito korengkeng</h5>
            <div className="brand-subtitle">Web Designer | Developer</div>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar