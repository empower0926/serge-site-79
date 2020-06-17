import React, { Component } from 'react';
import Dashboard from './dashboard'
import Trading from './trading'
import WalletOverview from './walletOverview'
import Wallets from './wallets'
import Markets from './markets'
import Calculator from './calculator'
import Transactions from './transactions'
import News from './news'
import WallertAddCard from '../models/Wallet/wallet_add_card'
import {Link} from 'react-scroll'


class main extends Component {
    
    constructor(props) {
        super(props);
        if(this.getData()===null){
        this.state={
            value: <Dashboard /> ,
                heading:"Dashboard"
        }
    }else{
        if ("dashboard" === this.getData()) {
            this.state={
                value: <Dashboard /> ,
                    heading:"Dashboard"
            }
        } else if ("markets" === this.getData()) {
            this.state={
                value: <Markets update={this.ChangefromTrading} />,
                heading:"Markets" 
            }
            
        }  else if ("wallets" === this.getData()) {
            this.state={
                value: <div> <Wallets update={this.ChangefromWalletOverview} /> <WallertAddCard/></div>,
                heading:"Wallets"  
            }
        }else if("calculator" === this.getData()) {
            this.state={
                value: <Calculator/>,
                heading:"Calculator" 
            }
        }else if("transaction" === this.getData()) {
            this.state={
                value: <Transactions/>,
                heading:"Transaction"
            }

        }else if("cryptonews" === this.getData()) {
            this.state={
                value: <News/>,
                heading:"News" 
            }

        }
    }
       
    }
    setData(para){
        let obj={heading:para}
       sessionStorage.setItem('mydata',JSON.stringify(obj))
    }
    getData(){
        let data=sessionStorage.getItem('mydata');
        data = JSON.parse(data);
        let val=data.heading;
        return val;
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
        this.setData(event.target.name);
        if ("dashboard" === event.target.name) {
            this.setState({ value: <Dashboard /> });
            this.setState({ heading:"Dashboard" });
        } else if ("markets" === event.target.name) {
            this.setState({ value: <Markets update={this.ChangefromTrading} /> });
            this.setState({ heading:"Markets" });
        }  else if ("wallets" === event.target.name) {
            this.setState({ value:<div> <Wallets update={this.ChangefromWalletOverview} /> <WallertAddCard/></div>});
            this.setState({ heading:"Wallets" });
        }else if("calculator" === event.target.name) {
            this.setState({ value: <Calculator/> });
            this.setState({ heading:"Calculator" });
        }else if("transaction" === event.target.name) {
            this.setState({ value: <Transactions/> });
            this.setState({ heading:"Transaction" });
        }else if("cryptonews" === event.target.name) {
            this.setState({ value: <News/> });
            this.setState({ heading:"News" });
        }

        
    }
    render() {
        document.body.style.background='';
        return (<div>
            {/*  <!-- navbar --> */}
            <nav className="main-nav">

                <ul className="main-nav-ul">
                    <li className="side-nav-item nav-home">
                        <button className="side-nav-link" href="/"><img src="../assets/images/exported/nav_icons/logo.svg" alt="home" /></button>
                    </li>
                    <li className="side-nav-item">
                      <Link to="root" smooth={true} duration={1000} > <button className="side-nav-link" href="/" name="dashboard" onClick={this.handledivChange}><img name="dashboard" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/dashboard.svg"
                            alt="dashboard" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button className="side-nav-link" href="/" name="wallets" onClick={this.handledivChange}><img name="wallets" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/wallets.svg"
                            alt="wallets" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button  className="side-nav-link" href="/" name="markets" onClick={this.handledivChange}><img name="markets" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/markets.svg"
                            alt="markets" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button className="side-nav-link" href="/" name="trading" onClick={this.handledivChange}><img name="trading" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/blockchain.svg"
                            alt="blockchain" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button  className="side-nav-link" href="/" name="transaction" onClick={this.handledivChange}><img name="transaction" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/transaction.svg"
                            alt="transaction" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button  className="side-nav-link" href="/" name="calculator" onClick={this.handledivChange}><img name="calculator" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/cal.svg"
                            alt="calculator" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button  className="side-nav-link" href="/" name="cryptonews" onClick={this.handledivChange}><img name="cryptonews" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/news.svg"
                            alt="crypto news" /></button></Link>
                    </li>
                    <li className="side-nav-item">
                    <Link to="root" smooth={true} duration={1000} ><button  className="side-nav-link" href="/" name="settings" onClick={this.handledivChange}><img name="settings" onClick={this.handledivChange} src="../assets/images/exported/nav_icons/settings.svg"
                            alt="settings" /></button></Link>
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