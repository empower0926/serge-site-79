import React, { Component } from 'react';
import Login from './login'
import Register from './register'
class User extends Component {
    
    constructor(props) {
        super(props);
        this.state = { value: <Login signup={this.RegisterView}/>}
    }
    RegisterView = () => {
        this.setState({ value: <Register signin={this.LoginView}/> });
       
    }
    LoginView = () => {
    this.setState({ value: <Login signup={this.RegisterView}/>});
       
    }
    render() { 
        return ( 
            <div>
          {/*  <!-- nav -->  */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="#">
                                <img src="../assets/images/exported/logo.svg" alt=""/>
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown mx-2">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            EN
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">ARAB</a>
                                            <a class="dropdown-item" href="#">SPANISH</a>
                                            <a class="dropdown-item" href="#">ANOTHER LANGUAGE</a>
                                        </div>
                                    </li>
                                    <li class="nav-item mx-2">
                                        <a class="nav-link" href="#">SUPPORT</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        
        
            <section class="login-n-regigster">
                <div class="container user-container">
                 {/*    <!-- login and register pannels changes here --> */}
                 {this.state.value}
                </div>
        
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10 mx-auto">
                            <div class="row">
                                <div class="col-md-8 mt-4 socials d-flex">
                                    <div class="social-buttons">
                                        <a class="mr-3" href="#"><img
                                                src="../assets/images/exported/login_socials/medium-with-circle.svg"
                                                alt="flash wallet medium"/></a>
                                        <a class="mr-3" href="#"><img
                                                src="../assets/images/exported/login_socials/facebook-with-circle.svg"
                                                alt="flash wallet facebook"/></a>
                                        <a class="mr-3" href="#"><img
                                                src="../assets/images/exported/login_socials/twitter-with-circle.svg"
                                                alt="flash wallet twitter"/></a>
                                        <a class="mr-3" href="#"><img
                                                src="../assets/images/exported/login_socials/instagram-with-circle.svg"
                                                alt="flash wallet instagram"/></a>
                                        <a class="mr-3" href="#"><img
                                                src="../assets/images/exported/login_socials/linkedin-with-circle.svg"
                                                alt="flash wallet linkedIn"/></a>
                                        <a href="#"><img src="../assets/images/exported/login_socials/dribbble-with-circle.svg"
                                                alt="flash wallet dribbble"/></a>
                                    </div>
                                </div>
        
                                <div class="col-md-4 mt-4 terms d-flex">
                                    <div class="terms-buttons">
                                        <a href="#">Terms of service</a>
                                        <a class="mx-3" href="#">Contact</a>
                                        <a href="#">Support</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </section>
        
            </div>
        

         );
    }
}
 
export default User;