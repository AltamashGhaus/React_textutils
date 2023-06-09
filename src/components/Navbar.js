import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">{props.color}</button>
        <button type="button" class="btn btn-secondary">{props.color}</button>
        <button type="button" class="btn btn-secondary">{props.color}</button>
      </div>
      <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
        <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"/>
        <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Not Mandatory default prop'
}