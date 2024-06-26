import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled" aria-disabled="true">Disabled</button>
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
           </form>*/}
           <div className="d-flex"> {/*This is we are making for palette*/}
            <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode('primary')}} style={{height: '30px',width:'30px',cursor:'pointer'}} ></div> {/*Jaise hi pallete par bhi click kiya to color change hoga and also jaise hi pallete par jayenge to pointer aa jayega*/}
            <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode('danger')}} style={{height: '30px',width:'30px',cursor:'pointer'}} ></div> {/*See console also while clicking*/}
            <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height: '30px',width:'30px',cursor:'pointer'}} ></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode('warning')}} style={{height: '30px',width:'30px',cursor:'pointer'}} ></div> {/* bg = background color*/}
           </div>
            <div className={`form-check form-switch text-$(props.mode==='light' ? 'dark':'light')`}> {/*This line is a js code. It consist of ternary operator to check the mode status and operate it accordingly. Here we make use of the dollar statement to write this condition or variable*/}
            <input className="form-check-input" onClick= {props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label> {/*Also remember to change the 'for' to 'htmlfor'*/}
                    </div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {  /*It is used to show the datatypes which is used.
    /*PropTypes is a feature in React that allows you to define the types of props that should be passed to a component. It is a way to validate the props and ensure that they have the correct data type, format, or value before the component is rendered*/
    title : PropTypes.string,
    aboutText : PropTypes.string
}

//Navbar.defaultProps = { //If we don't want to write prop values in App.js, then we can make defaultProp and write in it
    //title : 'Hello',
    //aboutText : 'About'
//};