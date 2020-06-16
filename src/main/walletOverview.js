import React, { Component } from 'react';

class WalletOverview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">

    <div className="row">
        <div className="col-xl-4 d-flex">
            <span className="header-name">OZTG</span>
            <span className="wallet-name ml-auto">Overview</span>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-xl-4 d-flex wallet-intro">
            <button className="back-btn" onClick={() => this.props.back()}><img src="../assets/images/exported/back.svg" alt=""/> Back</button>
            <div className="ml-auto">
                <span className="wallet-name">My OZTG Wallet</span>
                <img className="coin-img" src="../assets/images/exported/currencies/OZTG.svg" alt=""/>
            </div>
        </div>
    </div>

    <div className="row">
       {/*  <!-- left side --> */}
        <div className="col-xl-4">
            <div className="row">

                <div data-aos="fade-up" className="tile-parent col-xl-12">
                    <div className="tile">

                        <div className="row">
                            <div className="col-xl-12 d-flex">
                                <span className="total">0.221746</span>
                                <button className="ham ml-auto"><img src="../assets/images/exported/ham-white.svg"
                                        alt=""/></button>
                            </div>

                            <div className="col-xl-12 mt-4">
                                <div className="row">
                                    <div className="col-4"><button className="outile-btn sr sr-send">send</button></div>
                                    <div className="col-8"><button className="outile-btn sr">recieve</button></div>
                                </div>
                            </div>

                            <div className="col-xl-12 d-flex mt-4">
                                <span>Your OZTG adress:</span>
                                <span className="ml-auto">QR-code</span>
                            </div>

                            <div className="col-xl-12">
                                <input className="qr" type="text"/>
                            </div>
                        </div>

                    </div>
                </div>


                <div data-aos="fade-up" data-aos-delay="50" className="tile-parent col-xl-12">
                    <div className="tile">
                        <div className="row">
                            <div className="col-xl-12 d-flex">

                                <div>
                                    <span className="heading">Transactions</span>
                                </div>

                                <div className="d-flex justify-content-end ml-auto">
                                    <span className="transaction-mode">ALL</span>
                                    <span className="transaction-mode ml-2">SEND</span>
                                    <span className="transaction-mode ml-2">RECENT</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- transaction --> */}
                        <div className="row mt-5 transaction mx-1">
                            <div className="col-xl-12 d-flex">
                                <div>
                                    <span className="transaction-date">16:23, 12 dec 2018</span>
                                </div>
                                <div className="ml-auto">
                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
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
                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
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
                                    <img src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
                                    <span className="transaction-value">0.009 BTC</span>
                                </div>
                            </div>

                            <div className="col-xl-12 mt-3">
                                <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-xl-12 d-flex justify-content-end">
                                <button className="outile-btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        {/* <!-- right side --> */}
        <div data-aos="fade-up" data-aos-delay="100" className="tile-parent col-xl-8">
            <div className="tile">
                <div className="row">
                    <div className="tile-nav col-xl-4 chart-nav mb-3">
                        <div>
                            <span className="heading chart-name">OZTG Chart</span>
                        </div>
                        <div className="ml-auto">
                            <span className="time-select">1m</span>
                            <span className="time-select">6m</span>
                            <span className="time-select">1y</span>
                            <span className="time-select">all</span>
                        </div>
                    </div>

                    <div className="from-to col-xl-8 d-flex justify-content-end">
                        <div className="from">
                            <span>FROM</span>
                            <input type="text"/>
                        </div>

                        <div className="to ml-4">
                            <span>TO</span>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="col-xl-12 d-flex justify-content-end mt-3">
                        <span className="chart-value">9,756.00</span>
                    </div>

                    {/* <!-- chart --> */}
                    <div className="col-xl-12 mt-5">
                        <div className="">
                            {/* <!-- put your chart here --> */}
                            <div>chart shows here</div>
                            <div>chart shows here</div>
                            <div>chart shows here</div>
                            <div>chart shows here</div>
                            <div>chart shows here</div>
                            <div>chart shows here</div>
                            <div>chart shows here</div>
                            <div>chart shows here</div>
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
 
export default WalletOverview;