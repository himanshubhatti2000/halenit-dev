import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class SignUp extends Component{
    constructor(){
        super()
        this.emailText="Email"
        this.passwordText="Password"
        this.loginText="Log in"
        this.createAccountText="Create account"
        this.signInText="Sign in"
        this.signupText="Sign up"
    }
    languageSwitch=()=>{
        if(this.props.langObj.language==="english"){
            this.emailText="Email"
            this.passwordText="Password"
            this.loginText="Log in"
            this.createAccountText="Create account"
            this.signInText="Sign in"
            this.signupText="Sign up"
        }
        else{
            this.emailText="E-post"
        this.passwordText="Lösenord"
        this.loginText="Logga in"
        this.createAccountText="Skapa konto"
        this.signInText="Logga in"
        this.signupText="Bli Medlem"
        }
    }
     render(){
        return(
            <div className="portal-container">
            <div className="sign-up">
         <div className="portal">
         <div className="portal-heading">
                 <h1>Sign up</h1>
             </div>
             <div className="portal-form">
                 <form>
                     <div className="col">
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.passwordText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input />
                     </div>
                     </div>
                     <div className="form-buttons">
                     <button className="my-button portal-submit">submit</button>
                     <Link  className=" change " to="/portal" >Already have account</Link>
                     </div>
                     
                 </form>
                 
    
             </div>
         </div>
         </div>
         </div>
         )
     }
 }
 export default SignUp