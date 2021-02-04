import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false) ;
       });
       console.log(valid)
       // validate the form was filled out
       Object.values(rest).forEach(val => {
         val === null && (valid = false);
       });
    return valid;
  };
 class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
          checkBox: false,
          firstName: null,
          lastName: null,
          email: null,
          phoneNumber: null,
          password: null,
          confirmPassword: null,
          formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber:"",
            password: "",
            confirmPassword: "",
          }
        };
      }
      handleSubmit = e => {
        e.preventDefault();
       if(!this.checkBox.checked){
           alert("Please accept terms and conditions")
           return
       }
        if (formValid(this.state)) {
          alert(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Phone: ${this.state.phoneNumber}
            Password: ${this.state.password}
          `);
        }

         else {
          alert("Fill all fields correctly");
        }
      };
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "lastName":
            formErrors.lastName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "phoneNumber":
            formErrors.password =
            value.length < 10 ? "invalid PHone number" : "";
          break;
          case "password":
            formErrors.confirmPassword =
            value===this.state.password ? "":"Those passwords didn’t match. Try again.";
            this.setState({ formErrors});
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          case "confirmPassword":
                formErrors.confirmPassword =
                 value===this.state.password ? "":"Those passwords didn’t match. Try again.";
                  console.log(formErrors)
                break;
      
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value });
      }
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
    componentDidMount(){
        this.checkBox=document.getElementById("terms-conditions")
        this.show=document.getElementById("show-password")
        this.password=document.getElementById("password")
        this.confirmPassword=document.getElementById("confirmPassword")
    }
    showPassword=e=>{
        console.log()
        if(this.show.checked){
            this.password.type="text"
            this.confirmPassword.type="text"
        }
        else{
            this.password.type="password"
            this.confirmPassword.type="password"
        }
        }
    
     render(){
         const {formErrors}=this.state
         this.languageSwitch()
        return(
            <div className="portal-container">
                <div className="sign-up">
                    <div className="portal sign-up-portal">
                        <div className="portal-heading">
                            <h1>Sign up</h1>
                        </div>
                        <div className="sign-up-form">
                            <form onSubmit={(e)=>this.handleSubmit(e)}>
                                <div className="first-name">
                                    <label>{this.firstNameText}</label>
                                    <div className="sign-up-input-border">
                                        <input placeholder={this.firstNameText}
                                            name="firstName"
                                            onChange={this.handleChange} />
                                    </div>
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                </div>
                                <div className="last-name">
                                    <label>{this.lastNameText}</label>
                                    <div className="sign-up-input-border">
                                        <input placeholder={this.lastNameText}
                                            name="lastName"
                                            onChange={this.handleChange} />
                                    </div>
                                    {formErrors.lastName.length > 0 && (
                                        <span className="errorMessage">{formErrors.lastName}</span>
                                    )}
                                </div>
                                <div className="email">
                                    <label>{this.emailText}</label>
                                    <div className="sign-up-input-border">
                                        <input placeholder={this.emailText}
                                            name="email"
                                            onChange={this.handleChange} />
                                    </div>
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className="phone-number">
                                    <label>{this.phoneNumber}</label>
                                    <div className="sign-up-input-border">
                                        <input placeholder={this.phoneNumber}
                                            name="phoneNumber"
                                            onChange={this.handleChange} />
                                    </div>
                                    {formErrors.phoneNumber.length > 0 && (
                                    <span className="errorMessage">{formErrors.phoneNumber}</span>
                                    )}
                                </div>
                                <div className="password">
                                    <label>{this.passwordText}</label>
                                    <div className="sign-up-input-border">
                                        <input placeholder={this.passwordText}
                                            name="password" type="password" id="password" onChange={this.handleChange}
                                        />
                                    </div>
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>

                                <div className="confirmPassword">
                                    <label>{this.confirmPasswordText}</label>
                                    <div className="sign-up-input-border">
                                        <input id="confirmPassword" type="password" placeholder={this.confirmPasswordText} name="confirmPassword" onChange={this.handleChange} />
                                    </div>
                                    {formErrors.confirmPassword.length > 0 && (
                                        <span className="errorMessage">{formErrors.confirmPassword}</span>
                                    )}
                                </div>
                                <div className="form-buttons">
                                <div className="sign-up-check">
                                    <div >
                                    <input id="show-password" type="checkbox" onClick={(e)=>this.showPassword(e)}/>
                                    <label htmlFor="show-password">Show Password</label>
                                    </div>
                                    <div>
                                    <input id="terms-conditions" name="termsConditions" type="checkbox" />
                                    <label htmlFor="terms-conditions">Accept terms and conditions</label>
                                    </div>
                                    
                                    
                                </div>
                                <button className="my-button portal-submit" type="submit">submit</button>
                                <Link className=" change " to="/portal" >Already have account</Link>
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