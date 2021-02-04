import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class LoginForm extends Component{
   state={
    password:"",
    email: ""
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
    submitHandler=e=>{
        e.preventDefault()
        if(this.state.email==="" || this.state.password===""){
            alert("Fill fields")
        }
        else{
            alert(`
        Email: ${this.state.email},
        Password: ${this.state.password}
        `)
        }
        
    }
    componentDidMount(){
        this.hideButton=document.getElementById("hidePassword")
        this.inputField=document.getElementById("password")
    }
    showPassword(){
        if(this.hideButton.checked){
            this.inputField.type="text"
        }
        else{
            this.inputField.type="password"
        }
    }

    render(){
        this.languageSwitch()
        return(
            <div className="portal-container">
            <div className="log-in">
         <div className="portal sign-in-portal">
         <div className="portal-heading">
                 <h1>Sign in</h1>
             </div>
             <div className="portal-form">
                 <form onSubmit={e=>this.submitHandler(e)}>
                     <label>{this.emailText}</label>
                     <div className="input-border">
                     <input name="email" value={this.state.email} placeholder={this.emailText} onChange={(e)=>this.setState({email: e.target.value})} />
                     </div>
                     <label>{this.passwordText}</label>
                     <div className="input-border">
                     <input name="password" type="password" id="password" placeholder={this.passwordText} onChange={e=>{this.setState({password: e.target.value})}}/>
                     {/*show-hide button */}
                     <input type="checkbox" id="hidePassword" onClick={e=>this.showPassword(e)}/>
                    <label htmlFor="hidePassword" className="show-hide"/>
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