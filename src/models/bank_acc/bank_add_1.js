import React, { Component } from 'react';

class BANK_ADD_1 extends Component {
    state = {}
    render() {
        return (<div data-aos="fade-up" className="buy-sell-body mt-5">
            <div className="row">
                <div className="col-xl-2"></div>
                <div className="col-xl-8 d-flex justify-content-center">
                    <div className="bank-form">
                        <form onSubmit={this.props.update} action="">
                            <div>
                                <span>NAME OF BANK</span>
                                <input type="text" />
                            </div>

                            <div className="mt-4">
                                <span>NAME OF ACCOUNT</span>
                                <input type="text" />
                            </div>

                            <div className="mt-4 d-flex justify-content-center">
                                <div>
                                    <span>SEPA TRANSFERT AMOUNT</span>
                                    <input type="text" />
                                </div>

                                <div className="ml-2">
                                    <span>CURRENCY</span>
                                    <select className="bank-select" name="" id=""></select>
                                </div>
                            </div>

                            <button className="buy-sell-btn">Continue</button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-2"></div>
            </div>
        </div>);
    }
}

export default BANK_ADD_1;