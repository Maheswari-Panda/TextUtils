import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  const [darkThemecolor,setdarkThemeColor] = useState('#15143d');
  const [lightThemecolor,setlightThemeColor] = useState('#fff');
  const handleLightThemeColorChange = (event)=>{
    setlightThemeColor(event.target.value);
  }
  const handleOnChange=(event)=>{
    setdarkThemeColor(event.target.value);
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="row mx-3">
          <input type="color" className="form-control" id="colorBox" onChange={handleOnChange} title="Choose your color"/>
            Select Dark Theme Color
          </div>
          <div className='row mx-3'>
          <input type="color" className="form-control" id="colorBox" onChange={handleLightThemeColorChange} title="Choose your color"/>
            Select Light Theme Color
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={()=>props.toggleMode(darkThemecolor,lightThemecolor)} />
            <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}>{`Enable ${props.mode==='dark'?'Light':'Dark'} Mode`}</label>
          </div>
        </div>
      </div> 
    </nav>
  </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
    url: PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Navbar',
//     aboutText: 'About',
//     url:'/'
// }