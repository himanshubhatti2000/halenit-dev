import React, { Component } from 'react'
import ReviewCard from './ReviewCard'
import {reviewData} from '../Data/data'
class Homepage extends Component{
    languageSwitch(){
        if(this.props.langObj.language==="english"){
            this.bestHeading="BEST"
        this.securityHeading="SECURITY"
        this.servicesHeading="SERVICES"
        this.getStartedButton="Get Started"
        this.aboutUsHeading="About us"
        this.aboutUsPara="English Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae placerat ex.Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur.Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, necmollis libero gravida lacinia. Fusce in tempus massa. Etiam elementumefficitur urna, quis iaculis arcu maximus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        this.extraTextOne="NEupro cddfdfd"
        this.extraTextTwo="NEupro cddfdfd"
        this.extraTextThree="NEupro cddfdfd"
        this.rotateText="NEupro cddfdfd"
    }
        else{
            this.bestHeading="BÄSTA"
        this.securityHeading="SÄKERHET"
        this.servicesHeading="TJÄNSTER"
        this.getStartedButton="Komma igång"
        this.aboutUsHeading="Om oss"
        this.aboutUsPara="Swedish Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae placerat ex.Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur.Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, necmollis libero gravida lacinia. Fusce in tempus massa. Etiam elementumefficitur urna, quis iaculis arcu maximus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        this.extraTextOne="SNEupro cddfdfd"
        this.extraTextTwo="SNEupro cddfdfd"
        this.extraTextThree="SNEupro cddfdfd"
        this.rotateText="SNEupro cddfdfd"
    }
    }
    topSection(){
        this.languageSwitch()
        return(
            <div className="top-section-container">
                    <div className="top-section">
                        <div className="laptop-image">
                            <img src="../assests/images/hero4.jpg" alt="laptop"/>
                             </div>
                        <div className="hero-box">
                            <div className="content">
                                <h1 className="best">{this.bestHeading}</h1>
                                <h1 className="security">{this.securityHeading}</h1>
                                <h1 className="services">{this.servicesHeading}</h1>
                                <button className="my-button">{this.getStartedButton}</button>
                            </div>
                           { <div className="rotate">
                                <h1>{this.rotateText}</h1>
        </div>}
                        </div>
                    </div>
                   <div className="top-section-bottom">
                        <h1>{this.extraTextOne}</h1>
                        <h1>{this.extraTextTwo}</h1>
                        <h1>{this.extraTextThree}</h1>
                        </div>

                </div>
        )
    }
    aboutUs(){
        return(<div className="about-us">
        <div >
        <h1> {this.aboutUsHeading} </h1>
        </div>
            <p>{this.aboutUsPara} </p>
    </div>)
    }
    reviews(){
        const reviewJSX=reviewData.map(i=>{
            return <ReviewCard key={i.id} name={i.user} image={i.image} review={this.props.langObj.language==="english"?i.engReviewText: i.sweReviewText} />
        })
        return(
            <div className="reviews-container">
                <div className="reviews">
                    {reviewJSX}
                </div>
                
            </div>
        )
    }
    render(){
        //console.log(this.props.langObj)
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