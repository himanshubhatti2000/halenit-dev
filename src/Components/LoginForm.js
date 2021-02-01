import React from 'react'
import {Link} from 'react-router-dom'
function LoginForm(){
    return(
        <div className="portal-container">
           <div className="log-in">
        <div className="portal">
        <div className="portal-heading">
                <h1>Sign in</h1>
            </div>
            <div className="portal-form">
                <form>
                    <label>Email</label>
                    <div className="input-border">
                    <input />
                    </div>
                    <label>Password</label>
                    <div className="input-border">
                    <input />
                    </div>
                    <div className="form-buttons">
                    <button className="my-button portal-submit">Log in</button>
                    <Link  className=" change " to="/portal/sign-up" >Create account</Link>
                    </div>
                    
                </form>
                

            </div>
        </div>
        </div>
        </div>
    )
}

export default LoginForm