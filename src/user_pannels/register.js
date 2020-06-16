import React, { Component } from 'react';
class Register extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="row h-100 align-items-center">

    <div className="col-md-5" action="#" method="POST">
       {/*  <!-- register form --> */}
        <h1 className="mb-4">Register</h1>
        <form action="#" method="POST">
            <div className="row">
                <div className="col-md-4">
                    <input className="email-password" type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div className="col-md-8">
                    <input className="email-password" type="text" name="email" id="email" placeholder="Email"/>
                </div>
            </div>
            <input className="email-password" type="password" name="password" id="password" placeholder="Choose a password"/>
            <div className="row">
                <div className="col-xl-6">
                    <button className="register-btn" type="submit">Create Account</button>
                </div>
            </div>
        </form>
        <div className="forgot-password">
            <div><span>Already have an account?</span> <a onClick={() => this.props.signin()} href="#">Log In</a></div>
        </div>
    </div>
</div>
         );
    }
}
 
export default Register;