import React, { Component } from 'react';

class SellRight extends Component {
    state = {  }
    render() { 
        return ( 
            
<div data-aos="fade-left" className="col-xl-5 mt-5">
    <div className="row">
        <div className="col-xl-12 d-flex justify-content-center">
            <span className="heading">YOU ARE BUYING</span>
        </div>

        <div className="col-xl-12 d-flex justify-content-center">
            <span className="buy-value text-main mt-4">0.75454 BTC</span>
        </div>

        <div className="col-xl-12 d-flex justify-content-center mb-5">
            <span className="mt-1">@ $7 803,05 per BTC</span>
        </div>


       {/*  <!-- summery --> */}
        <div className="col-xl-12 mt-5">
            <div className="row">
                <div className="col-xl-2 mb-4">
                    <img className="wallet" src="../assets/images/exported/bit.svg" alt=""/>
                </div>

                <div className="col-xl-8">
                    <div>PAYMENT METHOD</div>
                    <div className="mt-1">My <span className="text-main">BTC</span> Wallet</div>
                </div>
            </div>


            <div className="row">
                <div className="col-xl-1 pl-4 mt-3">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-xl-2 mt-2 mb-2">
                    <img className="wallet" src="../assets/images/exported/wallet.svg" alt=""/>
                </div>

                <div className="col-xl-8 mt-1">
                    <div>DEPOSIT TO</div>
                    <div className="mt-1">My <span className="text-main">USD</span> Wallet</div>
                </div>
            </div>


            {/* <!-- bottom-box --> */}
            <div className="row mt-5">
                <div className="col-xl-12">
                    <div className="summery">
                        <div className="row">
                            <div className="col-xl-12 d-flex">
                                <span>0,00000000 BTC</span>
                                <div className="h-line my-auto ml-auto"></div>
                                <span className="ml-auto text-main">$0,00</span>
                            </div>

                            <div className="col-xl-12 mt-4 d-flex">
                                <span>FLASHWALLET Fee</span>
                                <div className="h-line my-auto ml-auto"></div>
                                <span className="ml-auto text-main">$0,00</span>
                            </div>

                            <div className="col-xl-12 mt-4 d-flex">
                                <span>TOTAL</span>
                                <div className="h-line my-auto ml-auto"></div>
                                <span className="ml-auto text-main">$0,00</span>
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
 
export default SellRight;