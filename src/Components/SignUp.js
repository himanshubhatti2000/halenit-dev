import React from 'react'
import {Link} from 'react-router-dom'
 function SignUp(){
     return(
        <div className="portal-container">
        <div className="sign-up">
     <div className="portal">
     <div className="portal-heading">
             <h1>Sign up</h1>
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
                 <label>Email</label>
                 <div className="input-border">
                 <input />
                 </div>
                 <label>Password</label>
                 <div className="input-border">
                 <input />
                 </div>
                 <div className="form-buttons">
                 <button className="my-button portal-submit">Sign up</button>
                 <Link  className=" change " to="/portal" >Already have account</Link>
                 </div>
                 
             </form>
             

         </div>
     </div>
     </div>
     </div>
     )
 }
 export default SignUp