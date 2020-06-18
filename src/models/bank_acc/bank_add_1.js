import React, { Component } from 'react';

class BANK_ADD_1 extends Component {
    state = {  }
    render() { 
        return ( <div class="buy-sell-body mt-5">
        <div class="row">
            <div class="col-xl-2"></div>
            <div class="col-xl-8 d-flex justify-content-center">
                <div class="bank-form">
                    <form onSubmit={this.props.update} action="">
                        <div>
                            <span>NAME OF BANK</span>
                            <input type="text"/>
                        </div>
    
                        <div class="mt-4">
                            <span>NAME OF ACCOUNT</span>
                            <input type="text"/>
                        </div>
    
                        <div class="mt-4 d-flex justify-content-center">
                            <div>
                                <span>SEPA TRANSFERT AMOUNT</span>
                                <input type="text"/>
                            </div>
    
                            <div class="ml-2">
                                <span>CURRENCY</span>
                                <select class="bank-select" name="" id=""></select>
                            </div>
                        </div>
    
                        <button  class="buy-sell-btn">Continue</button>
                    </form>
                </div>
            </div>
            <div class="col-xl-2"></div>
        </div>
    </div> );
    }
}
 
export default BANK_ADD_1;