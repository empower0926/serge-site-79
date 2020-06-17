import React, { Component } from 'react';
import OZTGTile from '../models/OZTGTile'
import ETHTile from '../models/ETHTile'
import LTCTile from '../models/LTCTile'
import BTCTile from '../models/BTCTIle'
import CurrencyChart from '../models/currency_chart'
class Dashboard extends Component {
    constructor(props) {
        super(props);
    this.state = { data: <OZTGTile /> ,chart:<CurrencyChart title={"OZTG"}/> }
    }
  
    handleClick(letter) {
        
        if ("OZTG" === letter) {
            this.setState({ data: <OZTGTile /> ,chart:<CurrencyChart title={"OZTG"}/>});
        } else if ("ETH" === letter) {
            this.setState({ data: <ETHTile /> ,chart:<CurrencyChart title={"ETH"}/>});
        }  else if ("LTC" === letter) {
            this.setState({ data: <LTCTile /> ,chart:<CurrencyChart title={"LTC"}/>});
        }else if ("BTC" === letter) {
            this.setState({ data: <BTCTile /> ,chart:<CurrencyChart title={"BTC"}/>});    
        }
      }
      
    render() {
        return (
            <div>
                <div className="container-fluid mt-2 mb-5">
                    <div className="row">
                        {/* <!-- left side --> */}
                        <div className="col-xl-9">

                            <div className="row">
                                {/*  <!-- current balance --> */}
                                <div className="tile-parent col-xl-4">
                                {this.state.data}
                                    </div>

                                {/*  <!-- stats --> */}
                                <div className="col-xl-8">
                                    {/* <!-- first line --> */}

                                    {/*  <!-- currency --> */}
                                    <div className="row">
                                    
                                        <div name="OZTG" onClick={() => this.handleClick("OZTG")}  data-aos="fade-up" data-aos-delay="50" className="tile-parent col-xl-3">
                                            <div  className="tile" >
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <span id="c-name" className="c-name">OZTG</span>
                                                        <span className="c-badge"><img   src="../assets/images/exported/currencies/OZTG.svg"
                                                            alt="OZTG" /></span>
                                                    </div>
                                                    <div className="col-xl-12 mt-3">
                                                        <span>OZTG</span>
                                                        <span className="c-value">1000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div name="ETH"onClick={() => this.handleClick("ETH")} data-aos="fade-up" data-aos-delay="100" className="tile-parent col-xl-3">
                                            <div className="tile">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <span id="c-name" className="c-name">ETH</span>
                                                        <span className="c-badge"><img src="../assets/images/exported/currencies/ETH.svg"
                                                            alt="ETH" /></span>
                                                    </div>
                                                    <div className="col-xl-12 mt-3">
                                                        <span>Ethereum</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div name="LTC"onClick={() => this.handleClick("LTC")} data-aos="fade-up" data-aos-delay="150" className="tile-parent col-xl-3">
                                            <div className="tile">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <span id="c-name" className="c-name">LTC</span>
                                                        <span className="c-badge"><img src="../assets/images/exported/currencies/LTC.svg"
                                                            alt="LTC" /></span>
                                                    </div>
                                                    <div className="col-xl-12 mt-3">
                                                        <span>Litecoin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div name="BTC"onClick={() => this.handleClick("BTC")} data-aos="fade-up" data-aos-delay="200" className="tile-parent col-xl-3">
                                            <div className="tile">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <span id="c-name" className="c-name">BTC</span>
                                                        <span className="c-badge"><img src="../assets/images/exported/currencies/BTC.svg"
                                                            alt="BTC" /></span>
                                                    </div>
                                                    <div className="col-xl-12 mt-3">
                                                        <span>Bitcoin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- second line --> */}
                                    <div className="row">
                                        <div data-aos="fade-up" data-aos-delay="250" className="tile-parent col-xl-5">
                                            <div className="tile">

                                                {/*  <!-- availability --> */}
                                                <div className="availability row mt-3">
                                                    <div><img src="../assets/images//exported/mocks/Group 1.svg" alt="" /></div>
                                                    <div className="stat-item stat-value">81</div>
                                                    <div className="stat-item">OZTG</div>
                                                    <a className="more" href="#">
                                                        <img src="../assets/images/exported/3-dot.svg" alt="more" />
                                                    </a>
                                                </div>

                                                {/* <!-- availability --> */}
                                                <div className="availability row mt-4">
                                                    <div><img src="../assets/images//exported/mocks/Group 1.svg" alt="" /></div>
                                                    <div className="stat-item stat-value">81</div>
                                                    <div className="stat-item">OZTG</div>
                                                    <a className="more" href="#">
                                                        <img src="../assets/images/exported/3-dot.svg" alt="more" />
                                                    </a>
                                                </div>


                                                {/*  <!-- availability --> */}
                                                <div className="availability row mt-4">
                                                    <div><img src="../assets/images//exported/mocks/Group 1.svg" alt="" /></div>
                                                    <div className="stat-item stat-value">81</div>
                                                    <div className="stat-item">OZTG</div>
                                                    <a className="more" href="#">
                                                        <img src="../assets/images/exported/3-dot.svg" alt="more" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div data-aos="fade-up" data-aos-delay="300" className="tile-parent col-xl-7">
                                            <div className="tile">
                                                <form action="#" method="POST" className="row">
                                                    {/*   <!-- send --> */}
                                                    <div className="send col-xl-12 mt-4">
                                                        <span>WALLET</span>
                                                        <select name="wallet" id="wallet">
                                                            <option value="OZTG">OZTG</option>
                                                            <option value="OZTG">ETH</option>
                                                            <option value="OZTG">BTC</option>
                                                            <option value="OZTG">LTC</option>
                                                        </select>

                                                        <span>AMOUNT</span>
                                                        <input type="text" id="amount" />
                                                    </div>

                                                    <div className="send col-xl-12 mt-4">
                                                        <span>SEND TO</span>
                                                        <input type="text" id="send-to" className="send-to" />
                                                    </div>

                                                    <div className="send col-xl-12 mt-5 d-flex justify-content-end">
                                                        <button className="outile-btn">send</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- third line --> */}
                            <div className="row">
                                <div data-aos="fade-up" data-aos-delay="350" className="tile-parent col-xl-8">
                                {this.state.chart}
                                </div>

                                <div data-aos="fade-up" data-aos-delay="400" className="tile-parent col-xl-4">
                                    {/* <!-- markets --> */}
                                    <div className="tile">
                                        <div className="row">
                                            <div className="tile-nav col-xl-12 chart-nav">
                                                <div>
                                                    <span className="heading">Markets</span>
                                                </div>
                                                <div className="times">
                                                    <span className="time-select">USD</span>
                                                    <span className="time-select">EUR</span>
                                                    <span className="time-select">OZTG</span>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 mt-5">

                                                <div className="row mt-4 market d-flex">
                                                    <div>
                                                        <div className="convert">OZTG/EUR</div>
                                                        <div className="convert-value mt-1">0.1834</div>
                                                    </div>
                                                    <div className="mini-chart ml-auto"></div>
                                                </div>

                                                <div className="row mt-4 market d-flex">
                                                    <div>
                                                        <div className="convert">OZTG/EUR</div>
                                                        <div className="convert-value mt-1">0.1834</div>
                                                    </div>
                                                    <div className="mini-chart ml-auto"></div>
                                                </div>

                                                <div className="row mt-4 market d-flex">
                                                    <div>
                                                        <div className="convert">OZTG/EUR</div>
                                                        <div className="convert-value mt-1">0.1834</div>
                                                    </div>
                                                    <div className="mini-chart ml-auto"></div>
                                                </div>

                                                <div className="row mt-4 market d-flex">
                                                    <div>
                                                        <div className="convert">OZTG/EUR</div>
                                                        <div className="convert-value mt-1">0.1834</div>
                                                    </div>
                                                    <div className="mini-chart ml-auto"></div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- right side --> */}
                        <div className="col-xl-3">
                            <div className="row">
                                <div data-aos="fade-up" data-aos-delay="450" className="tile-parent col-xl-12">
                                    <div className="tile">
                                        <div className="row">
                                            <div className="col-xl-12 d-flex">
                                                <span className="transaction-mode">ALL</span>
                                                <span className="transaction-mode ml-2">SEND</span>
                                                <span className="transaction-mode ml-2">RECENT</span>
                                            </div>
                                        </div>

                                        {/*  <!-- transaction --> */}
                                        <div className="row mt-5 transaction mx-1">
                                            <div className="col-xl-12 d-flex">
                                                <div>
                                                    <span className="transaction-date">16:23, 12 dec 2018</span>
                                                </div>
                                                <div className="ml-auto">
                                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt="" />
                                                    <span className="transaction-value">0.009 BTC</span>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 mt-3">
                                                <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                                            </div>
                                        </div>

                                        {/*  <!-- transaction --> */}
                                        <div className="row mt-2 transaction mx-1">
                                            <div className="col-xl-12 d-flex">
                                                <div>
                                                    <span className="transaction-date">16:23, 12 dec 2018</span>
                                                </div>
                                                <div className="ml-auto">
                                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt="" />
                                                    <span className="transaction-value">0.009 BTC</span>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 mt-3">
                                                <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                                            </div>
                                        </div>

                                        {/* <!-- transaction --> */}
                                        <div className="row mt-2 transaction mx-1">
                                            <div className="col-xl-12 d-flex">
                                                <div>
                                                    <span className="transaction-date">16:23, 12 dec 2018</span>
                                                </div>
                                                <div className="ml-auto">
                                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt="" />
                                                    <span className="transaction-value">0.009 BTC</span>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 mt-3">
                                                <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                                            </div>
                                        </div>

                                        {/* <!-- transaction --> */}
                                        <div className="row mt-2 transaction mx-1">
                                            <div className="col-xl-12 d-flex">
                                                <div>
                                                    <span className="transaction-date">16:23, 12 dec 2018</span>
                                                </div>
                                                <div className="ml-auto">
                                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt="" />
                                                    <span className="transaction-value">0.009 BTC</span>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 mt-3">
                                                <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                                            </div>
                                        </div>

                                        {/* <!-- transaction --> */}
                                        <div className="row mt-2 transaction mx-1">
                                            <div className="col-xl-12 d-flex">
                                                <div>
                                                    <span className="transaction-date">16:23, 12 dec 2018</span>
                                                </div>
                                                <div className="ml-auto">
                                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt="" />
                                                    <span className="transaction-value">0.009 BTC</span>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 mt-3">
                                                <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div data-aos="fade-up" data-aos-delay="500" className="tile-parent col-xl-12">
                                    <div className="tile">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <span className="heading">News</span>
                                            </div>
                                            <div className="col-xl-12 mt-2">
                                                <span className="news">OZEETY, The Flashmoni Blockchain on live mode soon!⁣</span>
                                            </div>
                                            <div className="col-xl-12 mt-3">
                                                <span className="news-date">16:23, 1 June 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const charttitle="hi";
export default Dashboard;