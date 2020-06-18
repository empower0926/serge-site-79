import React, { Component } from 'react';

class Buy extends Component {
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
                            <span>PAYMENT METHOD</span>
                            <select className="bank-select" name="" id=""></select>
                            
                        </div>

                        <div className="ml-2 w-100">
                            <span>AMOUNT</span>
                            <input type="text"/>
                        </div>
                    </div>

                    <button className="add-payment-method"><img className="mr-2 mb-1" src="../assets/images/exported/circle-with-plus.svg" alt=""/>
                        Add Payment Method
                    </button>

                    <div className="mt-4 d-flex justify-content-center"> 
                        <div className="w-100">
                            <span>CURRENCY</span>
                            <select className="bank-select" name="" id=""></select>
                        </div>

                        <div className="w-100 ml-2">
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
 
export default Buy;