import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../assests/images/logo.svg'
class Header extends Component{
    constructor(){
        super();
        //Eng Variables;
        this.features="Features"
        this.portal="Portal"
        this.contact="Contact us"
        this.call="call us"
    }
    state={
        language: "english"
    }
    languageButton=()=>{
        const langButtonClass=this.state.language==="english"?"swedish-button":"english-button"
        
        return(
       <>
         <div className={langButtonClass} onClick={()=>{
            //console.log(this.state.language)
            const langChange=this.state.language==="english"?"swedish":"english"
            //console.log("new-lang",langChange)
            this.props.langObj.selectLanguage(langChange)
            //console.log("my-lang:",this.props.langObj.language)
            this.setState({language: langChange})
        }}  > </div>
       </>
        )
        }
    languageSwitch=()=>{
        if(this.props.langObj.language==="english"){
            this.features="Features"
       this.portal="Portal"
       this.contact="Contact us"
       this.call="call us"
       }
       else{
        this.features=" Funktioner"
        this.portal="Portal"
        this.contact="Kontakta oss"
        this.call="ring oss"
       }
    }
    componentDidMount=()=>{
        this.check=document.getElementById("check")
        
        //console.log(this.myBox)
        /*this.headerContainer=document.getElementById("headerContainer")*/
    }
    
    navBar=()=>{
        this.check.checked=false
        //this.headerContainer.style.marginBottom="0px"

    }
    render(){
        this.languageSwitch()
        return(
            <>
            <div className="header-container" id="headerContainer">
           <div className="Header" id="myHeader">
           <Link to='/'>
           <div className="logo">
                   <img className="logo-file" src={logo} alt="logo"/>
                
                   <h1 className="logo-lang">{this.state.language==="english"?".com":".se"}</h1>
                  
               </div>
               </Link>
               <input type="checkbox" id="check"/>
           <div className="tel-no">{this.call}: 43434354355</div>
           <ul className="nav-bar" id="navBar" onClick={(e)=>{this.navBar(e)}}>
               <div><NavLink activeClassName="selectStyle" className="nav-link" to='/features'>{this.features}</NavLink></div>
               <div><NavLink activeClassName="selectStyle" className="nav-link" to='/portal'>{this.portal}</NavLink></div>
               <div><NavLink activeClassName="selectStyle" className="nav-link" to='/contact-us'>{this.contact}</NavLink></div>
               <div>
                   {this.languageButton()}
               </div>
                
               
            </ul>
            
            <div className="mobile-menu-hide">
            </div>
            <label htmlFor="check" className="mobile-menu"  > </label>
           </div>
           </div>
           
            </>
        )
    }
}
export default Header