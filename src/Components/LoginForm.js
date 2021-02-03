import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class LoginForm extends Component{
    constructor(){
        super()
        this.emailText="Email"
        this.passwordText="Password"
        this.loginText="Log in"
        this.createAccountText="Create account"
        this.signInText="Sign in"
      
    }
    languageSwitch=()=>{
        if(this.props.langObj.language==="english"){
            this.emailText="Email"
            this.passwordText="Password"
            this.loginText="Log in"
            this.createAccountText="Create account"
            this.signInText="Sign in"
           
        }
        else{
            this.emailText="E-post"
        this.passwordText="Lösenord"
        this.loginText="Logga in"
        this.createAccountText="Skapa konto"
        this.signInText="Logga in"
        }
    }
    render(){
        this.languageSwitch()
        console.log(this.props)
        return(
            <div className="portal-container">
            <div className="log-in">
         <div className="portal">
         <div className="portal-heading">
                 <h1>Sign in</h1>
             </div>
             <div className="portal-form">
                 <form>
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     <label>{this.passwordText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     <div className="form-buttons">
                     <button className="my-button portal-submit">{this.loginText}</button>
                     <Link  className=" change " to="/portal/sign-up" >{this.createAccountText}</Link>
                     </div>
                     
                 </form>
             </div>
         </div>
         </div>
         </div>
        )
    }
}

export default LoginForm