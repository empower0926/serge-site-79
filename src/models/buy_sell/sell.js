import React, { Component } from 'react';

class Sell extends Component {
    state = {  }
    render() { 
        return ( 
            <div data-aos="fade-up" className="buy-sell-body mt-5">
            <div className="row">
                <div className="col-xl-2"></div>
                <div className="col-xl-8 d-flex justify-content-center">
                    <div className="bank-form">
                        <form action="">
                            

                            <div className="mt-4 d-flex justify-content-center"> 
                                <div className="w-100">
                                    <span>SELL FROM</span>
                                    <select className="bank-select" name="" id=""></select>
                                </div>
        
                                <div className="w-100 ml-2">
                                    <span>AMOUNT</span>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="mt-4 d-flex justify-content-center"> 
                                <div className="w-100">
                                    <span>DEPOSIT TO</span>
                                    <select className="bank-select" name="" id=""></select>
                                    
                                </div>
        
                                <div className="ml-2 w-100">
                                    <span>AMOUNT</span>
                                    <input type="text"/>
                                </div>
                            </div>
        

                            
                            <div className="mt-3">
                                <span>For <span className="text-main">200 USD</span> you will get <span className="text-main">0.75454 Bitcoin</span></span>
                            </div>
                            <button className="buy-sell-btn">Continue</button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-2"></div>
            </div>
        </div>
         );
    }
}
 
export default Sell;