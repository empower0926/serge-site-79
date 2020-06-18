import React, { Component } from 'react';

class CARDLINK_2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="buy-sell-body mt-5">
    <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 d-flex justify-content-center">
            <div className="bank-form">
                <form onSubmit={this.props.update} action="">
                    <div>
                        <span>COUNTRY</span>
                        <select className="bank-select" name="" id="">
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="INDIA">INDIA</option>
                            <option value="ANOTHER COUNTRY">ANOTHER COUNTRY</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <span>CARD NUMBER</span>
                        <div className="reference-input d-flex mt-2">
                            <input onChange={this.props.success} className="m-0 p-0" type="text"/>
                            <img src="../assets/images/exported/img-fi-visa.svg" alt=""/>
                            <img className="ml-2"
                                src="../assets/images/exported/img-fi-mastercard.svg"
                                alt=""/>
                        </div>
                    </div>

                    <div className="col-xl-6 p-0 mt-4 d-flex justify-content-center">
                        <div className="col p-0 mr-1">
                            <span>EXPIRY DATE</span>
                            <input type="text"/>
                        </div>

                        <div className="col p-0 ml-1">
                            <span>CVC</span>
                            <input type="password"/>
                        </div>
                    </div>

                    <div className="col-xl-6 p-0 mt-4">
                        <span>POSTAL CODE</span>
                        <input type="text"/>
                    </div>

                    <button className="buy-sell-btn">Continue</button>
                    <div className="mt-3">
                        <span>By adding a card, you accept <a href="#">The General Conditions of use of The Credit Card.</a></span>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-xl-2"></div>
    </div>
</div>
         );
    }
}
 
export default CARDLINK_2;