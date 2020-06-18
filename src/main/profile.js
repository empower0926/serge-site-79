import React, { Component } from 'react';
class Profile extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid settings mt-5">
                <div className="row">
                    <div className="col-xl-8">
                        <div data-aos="fade-up" className="row">
                            <div className="col col-xl-4">
                                <img className="avarar" src="../assets/images/exported/Avatar.svg" alt="" />
                            </div>
                            <div className="col small-screen-trick">
                                <span className="profile-message change-pic-message">Change Picture</span>
                                <div className="ml-auto"><button className="upload-img d-flex"> <img className="mr-3 align-self-center"
                                    src="../assets/images/exported/upload.svg" alt="" /> <span>Upload</span> </button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            {/*  <!-- empty div --> */}
                            <div className="col-xl-4">

                            </div>
                            <div data-aos="fade-up" data-aos-delay="50" className="col-xl-8 change-password">
                                <div className="w-50">
                                    <span id="change-pw" className="profile-message">Change password</span><br />
                                    <label for="change-pw">Enable 2-factor authentication on the <a href="#">security
                                page</a></label>
                                </div>
                                <div className="ml-auto"><button className="upload-img d-flex"> Change Password</button>
                                </div>
                            </div>
                        </div>


                        {/*  <!-- inputs --> */}

                        {/*  <!-- nickname --> */}
                        <div data-aos="fade-up" data-aos-delay="100" className="row mt-5">
                            <div className="col-xl-4 d-flex">
                                <span className="profile-message left-label nickname">Nick Name</span>
                            </div>

                            <div className="col-xl-8">
                                <input className="profile-input" type="text" />
                            </div>
                        </div>

                        {/* <!-- email --> */}
                        <div data-aos="fade-up" data-aos-delay="150" className="row mt-5">
                            <div className="col-xl-4 d-flex">
                                <span className="profile-message mb-3">Email</span>
                            </div>

                            <div className="col-xl-8">
                                <div><input className="profile-input" type="email" /></div>
                                <div className="d-flex mt-4 justify-content-end"><button className="upload-img">Save</button></div>
                            </div>
                        </div>

                        {/* <!-- Personal Details --> */}
                        <div data-aos="fade-up" data-aos-delay="150" className="row mt-5">
                            <div className="col-xl-4 d-flex">
                                <span className="profile-message personal-details mt-2">Personal Detail</span>
                            </div>

                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <span className="heading">Legal Name</span>
                                    </div>
                                    <div className="col-xl-6 mt-3">
                                        <input className="profile-input" type="email" />
                                    </div>
                                    <div className="col-xl-6 mt-3">
                                        <input className="profile-input" type="email" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-xl-12">
                                        <span className="heading">Date of birth</span>
                                    </div>
                                    <div className="col mt-3">
                                        <select className="dob">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                            <option value="1">6</option>
                                            <option value="1">7</option>
                                            <option value="1">8</option>
                                            <option value="1">9</option>
                                            <option value="1">10</option>
                                            <option value="1">111</option>
                                        </select>
                                    </div>
                                    <div className="col mt-3">
                                        <select className="dob">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                            <option value="1">6</option>
                                            <option value="1">7</option>
                                            <option value="1">8</option>
                                            <option value="1">9</option>
                                            <option value="1">10</option>
                                            <option value="1">111</option>
                                        </select>
                                    </div>

                                    <div className="col mt-3">
                                        <select className="dob">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                            <option value="1">6</option>
                                            <option value="1">7</option>
                                            <option value="1">8</option>
                                            <option value="1">9</option>
                                            <option value="1">10</option>
                                            <option value="1">111</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex mt-4 justify-content-end"><button className="upload-img">Save</button></div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-1"></div>
                    <div data-aos="fade-left" data-aos-delay="50" className="col-xl-3 d-flex justify-content-center">
                        <div className="row">
                            <div className="col-xl-12 d-flex">
                                <ul className="profile-nav">
                                    <li className="mt-0"><a href="#">PROFILE</a></li>
                                    <li><a href="#">SECURITY</a></li>
                                    <li><a href="#">NOTIFICATION</a></li>
                                    <li><a href="#">REFERRALS</a></li>
                                    <li><a href="#">EMAIL SETTINGS</a></li>
                                    <li><a href="#">SESSIONS</a></li>
                                </ul>
                            </div>

                            <div className="blue-block align-self-end col-xl-12 ">
                                <div className="d-flex">
                                    <span className="mx-auto profile-complete">Your profile is 35% complete</span>
                                </div>

                                <div className="d-flex mt-3">
                                    <input className="mx-auto" type="range" />
                                </div>

                                <div className="d-flex mt-5">
                                    <a className="mx-auto" href="#">UPDATE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;