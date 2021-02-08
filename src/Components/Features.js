import React, { Component } from 'react'
import HeadingContainer from './HeadingContainer'
import fire from '../assests/images/features/fire.svg'
import security from '../assests/images/features/security.svg'
class Features extends Component{
 
    languageSwitch(){
        if(this.props.langObj.language==="english"){
            this.featureHeading="FEATURES"
            this.featureText="E Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            this.firewallHeading="Fire-wall"
        this.securityHeading="Security"
        this.firewallPara="English Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Ut vitae placerat ex. Morb,onsectetur adipiscing elit. Ut vitae placerat ex. Morb, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non."
        this.securityPara="English Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Ut vitae placerat ex. Morb,onsectetur adipiscing elit. Ut vitae placerat ex. Morb, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non. "
        }
        else{
            this.featureHeading="FUNKTIONER"
            this.featureText="S Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            this.firewallHeading="Eldvägg"
        this.securityHeading="säkerhet"
        this.firewallPara="Swedish Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Ut vitae placerat ex. Morb,onsectetur adipiscing elit. Ut vitae placerat ex. Morb, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non."
        this.securityPara="Swedish Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Ut vitae placerat ex. Morb,onsectetur adipiscing elit. Ut vitae placerat ex. Morb, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non. "
        }
    }
    features(){
        //console.log(this.props.langObj.language)
        return(
            <div className="features">
                <div className="feature">
                    <div className="feature-img">
                    <img src={fire} alt="fire-wall" />
                    </div>
                    <div className="feature-info">
                        <h1>{this.firewallHeading}</h1>
                        <p>{this.firewallPara}</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-img">
                    <img src={security} alt="security" />

                    </div>
                    <div className="feature-info">
                        <h1>{this.securityHeading}</h1>
                        <p>{this.securityPara}</p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        this.languageSwitch()

        return (
            <div>
                <HeadingContainer title={this.featureHeading} desc={this.featureText} loc="../assests/images/features.svg" />
                {this.features()}
            
            </div>
        )
    }
}
export default Features