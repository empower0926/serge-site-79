import React, { Component } from 'react';
import Dashboard from './dashboard'
import Trading from './trading'
import WalletOverview from './walletOverview'
import Wallets from './wallets'
import Markets from './markets'
import WallertAddCard from '../models/wallet_add_card'



class main extends Component {
    constructor(props) {
        super(props);
        this.state = { value: <Dashboard /> ,
        heading:"Dashboard"}
    }
    ChangefromWalletOverview = () => {
        this.setState({ value: <WalletOverview  back={this.BackfromWalletOverview}/> });
        this.setState({ heading:"  " });
    }
    BackfromWalletOverview = () => {
        this.setState({ value:<div> <Wallets update={this.ChangefromWalletOverview} /> <WallertAddCard/></div> });
         this.setState({ heading:"Wallets" });
    
    }
    ChangefromTrading = () => {
        this.setState({ value: <Trading /> });
        this.setState({ heading:"Trading" });
        

    }
    handledivChange = (event) => {

        if ("dashboard" === event.target.name) {
            this.setState({ value: <Dashboard /> });
            this.setState({ heading:"Dashboard" });
        } else if ("markets" === event.target.name) {
            this.setState({ value: <Markets update={this.ChangefromTrading} /> });
            this.setState({ heading:"Markets" });
        }  else if ("wallets" === event.target.name) {
            this.setState({ value:<div> <Wallets update={this.ChangefromWalletOverview} /> <WallertAddCard/></div>});
            this.setState({ heading:"Wallets" });
        }
    }
    render() {
        document.body.style.background='';
        return (<div>
            {/*  <!-- navbar --> */}
            <nav className="main-nav">

                <ul className="main-nav-ul">
                    <li className="side-nav-item nav-home">
                        <a className="side-nav-link" href="/"><img src="../assets/images/exported/nav_icons/logo.svg" alt="home" /></a>
                    </li>
                    <li className="side-nav-item">
                        <a className="side-nav-link" href="/" name="dashboard" onClick={this.handledivChange}><img name="dashboard" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/dashboard.svg"
                            alt="dashboard" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a className="side-nav-link" href="/" name="wallets" onClick={this.handledivChange}><img name="wallets" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/wallets.svg"
                            alt="wallets" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a  className="side-nav-link" href="/" name="markets" onClick={this.handledivChange}><img name="markets" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/markets.svg"
                            alt="markets" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a className="side-nav-link" href="/" name="trading" onClick={this.handledivChange}><img name="trading" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/blockchain.svg"
                            alt="blockchain" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a  className="side-nav-link" href="/" name="transaction" onClick={this.handledivChange}><img name="transaction" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/transaction.svg"
                            alt="transaction" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a  className="side-nav-link" href="/" name="walletOverview" onClick={this.handledivChange}><img name="calculator" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/cal.svg"
                            alt="calculator" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a  className="side-nav-link" href="/" name="crypto news" onClick={this.handledivChange}><img name="crypto news" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/news.svg"
                            alt="crypto news" /></a>
                    </li>
                    <li className="side-nav-item">
                    <a  className="side-nav-link" href="/" name="settings" onClick={this.handledivChange}><img name="settings" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/settings.svg"
                            alt="settings" /></a>
                    </li>
                </ul>
            </nav>


            {/*  <!-- main content --> */}
            <main id="root">

                {/* top nav */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src="../assets/images/exported/nav_icons/logo.svg" className="img-fluid" alt=""/>
                    </a>
                    <h3 className="pannel-heading mx-auto" data-aos="zoom-in" > {this.state.heading}</h3>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link support" href="/"><img className="support-btn" src="../assets/images/exported/support.svg" alt=""/>Support</a>
                                <a className="nav-link support-text" href="/">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link profile-btn" href="/"><img className="profile-img" src="../assets/images/exported/Avatar.svg" alt=""/></a>
                                <a className="nav-link profile-text" href="/">my profile</a>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link username-text username" href="/">Serge Lobréau</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-5 logout-img" href="/"><img src="../assets/images/exported/log-out.svg"alt=""/></a>
                                <span className="nav-link logout-text" href="/">log out</span>
                            </li>
                        </ul>
                    </div>
                </nav>




                {/* dynamic stffs are handled here */}
                {this.state.value}

            </main>

        </div>);
    }
}

export default main;