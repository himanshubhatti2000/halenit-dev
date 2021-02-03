import React, { Component } from 'react'
import LoginForm from './LoginForm'
class Portal extends Component{
    
    render(){
        return(
            <>
        
            <LoginForm langObj={this.props.langObj}/>
            </>
        )
    }
}

export default Portal