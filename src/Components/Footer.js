import React, { Component } from 'react'
class Footer extends Component{
    langSwitch(){
        if(this.props.langObj.language==="english"){
            this.contactUsText="Contact Us"
            this.servicesText="Services"
            
        }
        else{
            this.contactUsText="Kontakta oss"
            this.servicesText="Tjänster"
            
        }
    }
    render(){
        this.langSwitch()
        return(
            <footer className="footer-container">
                <div className="footer">
                    <div className="links">
                        <div className="contact-us">
                            <h1>{this.contactUsText}</h1>
                            <h2>+44 345 678 903</h2>
                            <h2>halenit@gmail.com</h2>
                        </div>
                        <div className="SERVICES">
                            <h1>{this.servicesText}</h1>
                            <h2>Personal Plan</h2>
                            <h2>Profesional Plan</h2>
                            <h2>Advance Plan</h2>
                            <h2>Contact us</h2>
                        </div>
                        <div className="information">
                            <h1>INFORMATION</h1>
                            <h2>About Halen IT</h2>
                            <h2>Work with us</h2>
                            <h2>Privacy Policy</h2>
                            <h2>Terms and Conditions</h2>
                        </div>
                    </div>
                    <div className="social-media-and-site">
                        <div className="social-media">
                            <a href="#" target="_blank">
                            <div className="insta">
                        </div>
                            </a>
                       <a href="#" target="_blank">
                       <div className="twitter">
                         
                         </div>
                       </a>
                        <a href="#" target="_blank">
                        <div className="fb">
                       
                       </div>
                        </a>
                       
                        </div>
                     <div className="site">
                     © HALEN IT 2021
                     </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer