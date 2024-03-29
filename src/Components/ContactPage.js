import React, { Component } from 'react'
import HeadingContainer from './HeadingContainer'
import insta from '../assests/images/social/insta.svg'
import twitter from '../assests/images/social/twitter.svg'
import fb from '../assests/images/social/fb.svg'
import phone from "../assests/images/contact/phone.svg"
import message from "../assests/images/contact/message.svg"
import place from "../assests/images/contact/place.svg"
class ContactPage extends Component{
    languageSwitch=()=>{
       if(this.props.langObj.language==="english"){
           this.contactHeading= "CONTACT"
           this.contactText= "S Lorem ipsum dolor sit amet, consectetur adipiscing elit"
           this.contactLine="Edfd gfdgf dgfdg dfgfdgfd hfhfhf hgfhfhf fhfhfh hgfhfhf hfhfh fhfhfh fhfh  jyuyu gfdggdg"
       }
       else{
        this.contactHeading= "KONTAKT"
        this.contactText= "S Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        this.contactLine="Sdfd gfdgf dgfdg dfgfdgfd hfhfhf hgfhfhf fhfhfh hgfhfhf hfhfh fhfhfh fhfh  jyuyu gfdggdg"
       }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        this.languageSwitch()
        return(
            <div>
                <HeadingContainer title={this.contactHeading} desc={this.contactText} loc="../assests/images/contact-us.svg" />
                <div className="contact-container">
                <div className="social-media-contact">
                   <a href="#" target="_blank"> <img src={insta} alt="instagram"/></a>
                    <a href="#" target="_blank"><img src={twitter} alt="twitter"/></a>
                    <a href="#" target="_blank"><img src={fb} alt="facebook"/></a>
                </div>
                <div className="contact-main">
                    <div className="tel-img">
                    </div>
                    <div className="tel-info">
                    <div className="tel-desc">
                        <h1>Obaasasasds</h1>
                        
                            <p>0660-43 18 00 <br/>
                            Järnvägsgatan 8 <br/>
                            Box 221,891 25 Örnsköldsvik</p>
                        </div>
                        <div className="tel-ico">
                        <img src={phone} alt="phone"/>
                    <img src={message} alt="message"/>
                    <img src={place} alt="location"/>
                        </div>
                    </div>
                </div>
                <div className="contact-line">{this.contactLine}</div>
            </div>
            </div>
        )
    }
}

export default ContactPage