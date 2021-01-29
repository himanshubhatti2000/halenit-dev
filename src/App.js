import React, { Component } from 'react'
import './style/cssreset-meyers.css'
import './style/style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
class App extends Component{
    render(){
        return(
            <div className="container">
            <Header/>
            <Homepage/>
            <Footer />
            </div> 
        )
    }
}

export default App