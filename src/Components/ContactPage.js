import React from 'react'
import HeadingContainer from './HeadingContainer'
import insta from '../assests/images/social/insta.svg'
import twitter from '../assests/images/social/twitter.svg'
import fb from '../assests/images/social/fb.svg'
import phone from "../assests/images/contact/phone.svg"
import message from "../assests/images/contact/message.svg"
import place from "../assests/images/contact/place.svg"
function ContactPage(){
    return(
        <div>
            <HeadingContainer title="CONTACT US" desc="sfdfsdfdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfds" loc="img" />
            <div className="contact-container">
            <div className="social-media">
                <img src={insta} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
                <img src={fb} alt="facebook"/>
            </div>
            <div className="contact-main">
                <div className="tel-img">
                </div>
                <div className="tel-info">
                    <h1>Obaasasasds</h1>
                    <div className="tel-desc">
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
            <div className="contact-line">dfd gfdgf dgfdg dfgfdgfd hfhfhf hgfhfhf fhfhfh hgfhfhf hfhfh fhfhfh fhfh  jyuyu gfdggdg</div>
        </div>
        </div>
    )
}

export default ContactPage