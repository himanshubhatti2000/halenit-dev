import React, { Component } from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import './style/cssreset-meyers.css'
import './style/style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Slider from './Components/Slider'
import Features from './Components/Features'
import ContactPage from './Components/ContactPage'
import Portal from './Components/Portal'
import History from './History'
class App extends Component{
    render(){
        return(
            <Router history={History}>
            <div className="container">
           <Header/>
           <Switch>
               <Route path='/' exact component={Homepage}/>
               <Route path='/features' component={Features}/>
               <Route path='/contact-us' component={ContactPage}/>
               <Route path='/portal' component={Portal}/>
           </Switch>
           <Footer/>
            </div> 
            </Router>
        )
    }
}

export default App