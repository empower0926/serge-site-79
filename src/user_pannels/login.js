import React, { Component } from 'react';
class Login extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="row h-100 align-items-center">

    <div className="col-md-5" action="#" method="POST">
       {/*  <!-- login form --> */}
        <h1 className="mb-4">Log In</h1>
        <form action="#" method="POST">
            <input className="email-password" type="text" name="email" id="email" placeholder="Email"/>
            <input className="email-password" type="password" name="password" id="password" placeholder="Password"/>
            <div className="row">
                <div className="col-xl-6">
                    <button className="login-btn" type="submit">Log in</button>
                </div>
            </div>
        </form>
        <div className="forgot-password">
            <div><a href="#">Forgot password?</a></div>
            <div><span>Don't have an account?</span> <a onClick={() => this.props.signup()}>Sign Up</a></div>
        </div>
    </div>
</div>
      
         );
    }
}
 
export default Login;