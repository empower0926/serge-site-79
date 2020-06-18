import React, { Component } from 'react';

class SellRight extends Component {
    state = {  }
    render() { 
        return ( 
            
<div data-aos="fade-up" class="col-xl-5 mt-5">
    <div class="row">
        <div class="col-xl-12 d-flex justify-content-center">
            <span class="heading">YOU ARE BUYING</span>
        </div>

        <div class="col-xl-12 d-flex justify-content-center">
            <span class="buy-value text-main mt-4">0.75454 BTC</span>
        </div>

        <div class="col-xl-12 d-flex justify-content-center mb-5">
            <span class="mt-1">@ $7 803,05 per BTC</span>
        </div>


       {/*  <!-- summery --> */}
        <div class="col-xl-12 mt-5">
            <div class="row">
                <div class="col-xl-2 mb-4">
                    <img class="wallet" src="../assets/images/exported/bit.svg" alt=""/>
                </div>

                <div class="col-xl-8">
                    <div>PAYMENT METHOD</div>
                    <div class="mt-1">My <span class="text-main">BTC</span> Wallet</div>
                </div>
            </div>


            <div class="row">
                <div class="col-xl-1 pl-4 mt-3">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-xl-2 mt-2 mb-2">
                    <img class="wallet" src="../assets/images/exported/wallet.svg" alt=""/>
                </div>

                <div class="col-xl-8 mt-1">
                    <div>DEPOSIT TO</div>
                    <div class="mt-1">My <span class="text-main">USD</span> Wallet</div>
                </div>
            </div>


            {/* <!-- bottom-box --> */}
            <div class="row mt-5">
                <div class="col-xl-12">
                    <div class="summery">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span>0,00000000 BTC</span>
                                <div class="h-line my-auto ml-auto"></div>
                                <span class="ml-auto text-main">$0,00</span>
                            </div>

                            <div class="col-xl-12 mt-4 d-flex">
                                <span>FLASHWALLET Fee</span>
                                <div class="h-line my-auto ml-auto"></div>
                                <span class="ml-auto text-main">$0,00</span>
                            </div>

                            <div class="col-xl-12 mt-4 d-flex">
                                <span>TOTAL</span>
                                <div class="h-line my-auto ml-auto"></div>
                                <span class="ml-auto text-main">$0,00</span>
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