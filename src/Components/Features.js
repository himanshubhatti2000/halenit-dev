import React, { Component } from 'react'
import HeadingContainer from './HeadingContainer'
class Features extends Component{
    features(){
        return(
            
            <div className="feature-container">
                <div className="flex-container">
                    <div className="empty1">
                    </div>
                    <div className="feature">
                        <h1>Feature name</h1>
                        <p>dsfdfdfdsfdffdsfdsfdsf</p>
                    </div>
                    <div className="feature-img">
                        image
                    </div>
                    <div className="empty2">
                    </div>
                </div>

            </div>
        )
    }
    render(){
        return(
            <div>
                <HeadingContainer title="FEATURES" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." loc="temp" />
                {this.features()}
            
            </div>
        )
    }
}
export default Features