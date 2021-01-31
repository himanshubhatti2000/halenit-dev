import React from 'react'
function LoginForm(){
    return(
        <div className="log-in">
            <div className="portal-heading">
                <h1>Log in</h1>
            </div>
            <div className="login-form">
                <form>
                    <label>Email</label>
                    <input />
                    <label>Password</label>
                    <input />
                    <button>Log in</button>
                </form>
                <div className="create-account">
                    <button >Create account</button>
                </div>

            </div>
        </div>
    )
}

export default LoginForm