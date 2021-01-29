import React, { Component } from 'react'
import laptopImage from '../assests/images/aa.jpg'
import ReviewCard from './ReviewCard'
class Homepage extends Component{
    topSection(){
        return(
            <div className="top-section-container">
                    <div className="top-section">
                        <img src={laptopImage} className="laptop-image" alt="laptop" />
                        <div className="hero-box">
                            <div className="content">
                                <h1 className="best">BEST</h1>
                                <h1 className="security">SECURITY</h1>
                                <h1 className="services">SERVICES</h1>
                                <button className="my-button">Get Started</button>
                            </div>
                            <div className="rotate">
                                <h1>Neque Porro</h1>
                            </div>
                        </div>
                    </div>
                    <div className="top-section-bottom">
                        <h1>NEupro cddfdfd</h1>
                        <h1>NEupro cddfdfd</h1>
                        <h1>NEupro cddfdfd</h1>
                    </div>

                </div>
        )
    }
    aboutUs(){
        return(<div className="about-us">
        <div >
        <h1> About us </h1>
        </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae placerat ex.
            Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur.
            Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec
            mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum
efficitur urna, quis iaculis arcu maximus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non.</p>
    </div>)
    }
    reviews(){
        return(
            <div className="reviews-container">
                <div className="reviews">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
                
            </div>
        )
    }
    render(){
        return(
            <>
                {this.topSection()}
                {this.aboutUs()}
                {this.reviews()}
            </>
        )
    }
}
export default Homepage