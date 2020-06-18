import React, { Component } from 'react';
class BANK_ADD_2 extends Component {
    state = {}
    render() {
        return (
            <div data-aos="fade-up" className="buy-sell-body mt-5">
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8 d-flex justify-content-center">
                        <div className="bank-form">
                            <form action="">
                                <div className="blue-block p-3">
                                    <div className="heading">Please include this reference code in your
                                    transfer.</div>
                                    <div className="mt-4">
                                        Without this code, we cannot deposit these funds into
                                        your FlashWallet account.
                                </div>
                                </div>

                                <div className="mt-4">
                                    <span>REFERENCE NUMBER</span>
                                    <div className="reference-input d-flex mt-2">
                                        <input className="m-0 p-0" type="text" disabled value="CBAEURPSLVJCMV" />
                                        <img src="../assets/images/exported/code.svg" alt="" />
                                    </div>
                                </div>

                                <div className="d-flex mt-4">
                                    <input className="refer-check" type="checkbox" />
                                    <span className="mt-1">I’ve copied or written down my Reference
                                    Number</span>
                                </div>

                                <button onClick={this.props.update} className="buy-sell-btn">Continue</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-2"></div>
                </div>
            </div>
        );
    }
}

export default BANK_ADD_2;