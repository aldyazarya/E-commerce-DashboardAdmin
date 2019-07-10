import React, {Component} from 'react'

// import {API_URL} from '../../API_URL/API_URL'
// import axios from 'axios'
// import swal from '@sweetalert/with-react'
// import cookies from 'universal-cookie'
import {onLoginClick} from '../../action'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class Login extends Component {
    
    // login = (e) => {
    //     var url = `${API_URL}/verifadmin`;
    //     axios.get(url).then((x) => {
    //         var userdata = x.data
    //         console.log(userdata);

    //         var username = this.refs.username.value
    //         var password = this.refs.password.value
    //         var firstname = x.data[0].firstname

    //         var i;
    //         for(i = 0; i < userdata.length; i++){
    //             if ( username === userdata[i].username && password === userdata[i].password) {
    //                 axios.post(`${API_URL}/loginadmins`, {
    //                     username: e.username.value,
    //                     password: e.password.value
    //                 }).then (() => {
    //                     localStorage.setItem('usernameadmin', username)

    //                     cookie.set('usernameLogin', userdata[i].username, {path:'/dashboard'})
    //                     cookie.set('idLogin', userdata[i].id, {path:'/dashboard'})
    //                     // this.props.getUsername(username)
                        

    //                     swal({
    //                         title: "You have successfully logged in!",
    //                         text: `Hello, ${firstname}!`,
    //                         icon: "success",
    //                         button: "OK",
    //                     }).then(() => {
    //                         window.location.replace('http://localhost:3000/dashboard')
    //                     })
    //                 })

    //             }else if ( i === userdata.length - 1) {
    //                 swal({
                        
    //                     text: "Username or Password Incorrect!",
    //                     icon: "warning",
    //                     dangerMode: true})
    //                 }
    //                 break;  
    //             }
            
    //     })
    // }

    onSubmitClick = () => {
        const username = this.username.value
        const password = this.password.value
        this.props.onLoginClick (username, password)
        console.log("Username: " + username);
        console.log("Password: " + password);
    }

    render(){
        // console.log(this.props.user);
        const {user} = this.props
        
        if(user.username === "") {
            return(
                <div>
                    <div className="card">
                        <div className="header">
                            <h4>LOGIN</h4>
                        </div>
                        <div className="content">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Email</label>
                                    <div className="col-md-9">
                                        <input   type="teks"  placeholder="username" ref={input => {this.username= input}}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Password</label>
                                    <div className="col-md-9">
                                        <input   type="password"  placeholder="password" ref={input => {this.password= input}}/>
                                    </div>
                                </div>
                            </form>
                                <div className="form-group">
                                    <label className="col-md-3"></label>
                                    <div className="col-md-9">
                                        <button className="btn" onClick={this.onSubmitClick}>Sign In</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to="/dashboard"/>
        }
    }

}

const mapStateToProps = state => {
    return {user : state.auth}
}

export default connect (mapStateToProps, {onLoginClick})(Login);