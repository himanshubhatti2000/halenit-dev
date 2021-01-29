import React from 'react'
import logo from '../assests/images/logo.svg'
function Header(){
    return(
        <div className="header-container">
       <div className="Header">
       <div className="logo">
               <img src={logo} alt="logo"/>
               <h1 className="logo-lang">.com</h1>
           </div>
       <div className="contact-us">Contact us: 123-456-769</div>
       <div className="nav-bar">
           <h1>Features</h1>
           <h1>Portal</h1>
           <h1>Contact</h1>
           <h1>Temperoray</h1>
       </div>
       </div>
       </div>
    )
}
export default Header