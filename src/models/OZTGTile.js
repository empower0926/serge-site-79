import React, { Component } from 'react';
class OZTGTile extends Component {

    render() {
        return (
            <div data-aos="fade-left" className="tile">
                {/* <!-- transactions and wallets --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <span id="transactions" className="transactions">2,346</span>
                        <span id="no-of-wallets" className="no-of-wallets">5</span>
                    </div>
                </div>

                {/*  <!-- current balance --> */}
                <div className="row mt-5">
                    <div className="col-xl-12">
                        <span id="current-balance" className="current-balance">
                            3.4330
            </span>
                    </div>
                </div>

                {/* <!-- buy and sell --> */}
                <div className="row mt-4">
                    <div className="col-xl-8 mt-5">
                        <span id="value" className="value">2.7995 EUR</span> <span id="percentage"
                            className="percentage">+12</span>
                    </div>
                    <div className="col-xl-4 mt-3">
                        <button id="buy-sell" className="outile-btn">buy/sell</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OZTGTile;