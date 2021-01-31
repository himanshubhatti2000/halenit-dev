import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assests/images/logo.svg'
function Header(){
    return(
        <div className="header-container">
       <div className="Header">
       <Link to='/'>
       <div className="logo">
               <img src={logo} alt="logo"/>
               <h1 className="logo-lang">.com</h1>
           </div>
           </Link>
       <div className="contact-us">Contact us: 123-456-769</div>
       <div className="nav-bar">
           <Link className="nav-link" to='/features'>Features</Link>
           <Link className="nav-link" to='/portal'>Portal</Link>
           <Link className="nav-link" to='/contact-us'>Contact</Link>
           <h1>Temperoray</h1>
            </div>
       </div>
       </div>

    )
}
export default Header