import React, { Component } from 'react'
import HeadingContainer from './HeadingContainer'
import fire from '../assests/images/features/fire.svg'
import security from '../assests/images/features/security.svg'
class Features extends Component{
    features(){
        return(
            <div className="features">
                <div className="feature-container">
    
                <div className="feature">
                    <div className="feature-info one">
                        <h1>Firewall</h1>
                        <p>Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Ut vitae placerat ex. Morb,onsectetur adipiscing elit. Ut vitae placerat ex. Morb, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non. </p>
                    </div>
                    <div className="feature-img">
                        <img src={fire} alt="fire-wall"/>
                    </div>
                </div>
                
            </div>
            <div className="feature-container">
    
                <div className="feature">
                <div className="feature-img">
                <img src={security} alt="security"/>

</div>
                    <div className="feature-info  two">
                        <h1>Firewall</h1>
                        <p>Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Ut vitae placerat ex. Morb,onsectetur adipiscing elit. Ut vitae placerat ex. Morb, consectetur adipiscing elit. Ut vitae placerat ex. Morbi iaculis orci sed turpis pellentesque, nec congue turpis efficitur. Praesent aliquet velit a rutrum hendrerit. Aliquam posuere lacus lectus, nec mollis libero gravida lacinia. Fusce in tempus massa. Etiam elementum efficitur urna, quis iaculis arcu maximus non. </p>
                    </div>
                    
                </div>
                
            </div>
            </div>
        )
    }
    render(){
        return (
            <div>
                <HeadingContainer title="FEATURES" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." loc="temp" />
                {this.features()}
            
            </div>
        )
    }
}
export default Features