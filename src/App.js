import React, { Component } from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import './style/cssreset-meyers.css'
import './style/style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Features from './Components/Features'
import ContactPage from './Components/ContactPage'
import Portal from './Components/Portal'
import History from './History'
import SignUp from './Components/SignUp'
import LanguageContext from './Context/LanguageContext'
class App extends Component{
    state={language:"english"}
    selectLanguage=(language)=>{
        this.setState({language: language})
    }
    render(){
        //console.log(this.state.language)
        return(
            <Router history={History}>
            <div className="container">
           <LanguageContext.Provider value={{selectLanguage: this.selectLanguage, language: this.state.language}}>
            <Header langObj={{language:this.state.language,selectLanguage: this.selectLanguage}}/>
        </LanguageContext.Provider>
          
           <Switch>
               <Route path='/' exact render={()=><Homepage langObj={{language:this.state.language}}/>}/>
               <Route path='/features' render={()=><Features langObj={{language:this.state.language}}/>}/>
               <Route path='/contact-us' render={()=><ContactPage langObj={{language: this.state.language}}/>}/>
               <Route path='/portal' exact render={()=><Portal langObj={{language: this.state.language}}/>}/>
               <Route path='/portal/sign-up' render={()=><SignUp langObj={{language: this.state.language}}/>}/>
           </Switch>
           {<Footer langObj={{language: this.state.language}}/>}
            </div> 
            </Router>
        )
    }
}

export default App