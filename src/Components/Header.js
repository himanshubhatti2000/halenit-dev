import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assests/images/logo.svg'
function Header(){
    return(
        <>
        <div className="header-container">
       <div className="Header">
       <Link to='/'>
       <div className="logo">
               <img src={logo} alt="logo"/>
               <h1 className="logo-lang">.com</h1>
           </div>
           </Link>
           <input type="checkbox" id="check"/>
       <div className="tel-no">Call us: 43434354355</div>
       <ul className="nav-bar">
           <div><Link className="nav-link" to='/features'>Features</Link></div>
           <div><Link className="nav-link" to='/portal'>Portal</Link></div>
           <div><Link className="nav-link" to='/contact-us'>Contact-us</Link></div>
           <div>Temp</div>
        </ul>
        <div className="mobile-menu-hide">
        </div>
        <label htmlFor="check" className="mobile-menu"> </label>
       </div>
       </div>
        </>
    )
}
export default Header