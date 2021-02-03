import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class SignUp extends Component{
    
    languageSwitch=()=>{
        if(this.props.langObj.language==="english"){
            this.firstNameText="FirstName"
            this.lastNameText="LastName"
            this.emailText="Email"
            this.phoneNumber="Phone number"
            this.passwordText="Password"
            this.confirmPasswordText="confirmPassword"
            this.loginText="Log in"
            this.createAccountText="Create account"
            this.signInText="Sign in"
            this.signupText="Sign up"
        }
        else{
            this.firstNameText="FirstName"
            this.lastNameText="LastName"
            this.emailText="E-post"
        this.phoneNumber="Phone number"
        this.passwordText="Lösenord"
        this.loginText="Logga in"
        this.createAccountText="Skapa konto"
        this.confirmPasswordText="confirmPassword"
        this.signInText="Logga in"
        this.signupText="Bli Medlem"
        }
    }
    
     render(){
         this.languageSwitch()
        return(
            <div className="portal-container">
            <div className="sign-up">
         <div className="portal sign-up-portal">
         <div className="portal-heading">
                 <h1>Sign up</h1>
             </div>
             <div className="sign-up-form">
                 <form>
                     <div className="col">
                     <label>{this.firstNameText}</label>
                     <div className="sign-up-input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.lastNameText}</label>
                     <div className="sign-up-input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.emailText}</label>
                     <div className="sign-up-input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.phoneNumber}</label>
                     <div className="sign-up-input-border">
                     <input />
                     </div>
                     </div>
                     <div className="col">
                     <label>{this.passwordText}</label>
                     <div className="sign-up-input-border">
                     <input id="reEnterPassword"  onChange={event=>
                     {   
                         console.log(event)
                     }
                    }/>
                         {/*show-hide button */}
                    <button type="checkbox"  id="s-password" className="myClass" onClick={event=>{
                        event.preventDefault()
                        const inputS=document.getElementById("reEnterPassword")
                        inputS.type=inputS.type==="text"?"password":"text"
                    } }/>
                     </div>
                   
                     </div>
                    
                     <div className="col">
                     <label>{this.confirmPasswordText}</label>
                     <div className="sign-up-input-border">
                     <input />
                     </div>
                     </div>
                     
                 </form>
                 <div className="form-buttons">
                     <button className="my-button portal-submit">submit</button>
                     <Link  className=" change " to="/portal" >Already have account</Link>
                     </div>
                 
    
             </div>
         </div>
         </div>
         </div>
         )
     }
 }
 export default SignUp