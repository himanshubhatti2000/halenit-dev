import React, { Component } from 'react'
import LoginForm from './LoginForm'
class Portal extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <>
            <LoginForm langObj={this.props.langObj}/>
            </>
        )
    }
}

export default Portal