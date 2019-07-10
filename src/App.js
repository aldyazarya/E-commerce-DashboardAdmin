import React, {Component} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'


import Login from '../src/pages/login/Login'
import Main from '../src/pages/Main'
import {keepLogin} from '../src/action/index'


const cookie = new cookies()

class App extends Component {

    componentDidMount(){
        this.props.keepLogin(cookie.get("usernameLogin"), cookie.get("idLogin"))
    }

    render(){
        return(
            
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Login}/>
                        <Route path='/dashboard' component={Main}/>
                    </div>
                </BrowserRouter>
            
        )
    }
}
export default connect(null, {keepLogin})(App)