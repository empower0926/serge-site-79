import React, { Component } from 'react';

class BANK_ADD_3 extends Component {
    state = {}
    render() {
        return (
            <div data-aos="fade-up" className="buy-sell-body mt-2">
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8">
                        <div className="bank-form">
                            <form onSubmit={this.props.toBuysell} action="">

                                <div className="mt-4">
                                    <span>REFERENCE NUMBER</span>
                                    <div className="reference-input d-flex mt-2">
                                        <input className="m-0 p-0" type="text" disabled
                                            value="CBAEURPSLVJCMV" />
                                        <img src="../assets/images/exported/code.svg" alt="" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <span>RECIPIENT’S IBAN</span>
                                    <div className="reference-input d-flex mt-2">
                                        <input className="m-0 p-0" type="text" value="EE297700777777779098" />
                                        <img src="../assets/images/exported/code.svg" alt="" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <span>RECIPIENT NAME</span>
                                    <input type="text" />
                                </div>

                                <div className="mt-4">
                                    <span>BANK COUNTRY</span>
                                    <input type="text" />
                                </div>

                                <div className="mt-4">
                                    <span>BANK NAME</span>
                                    <input type="text" />
                                </div>

                                <div className="mt-4">
                                    <span>BANK ADDRESS</span>
                                    <input type="text" />
                                </div>

                                <div className="mt-4">
                                    <span>RECIPIENT ADDRESS</span>
                                    <input type="text" />
                                </div>

                                <div className="mt-4">
                                    <span>REFERENCE NUMBER</span>
                                    <div className="reference-input d-flex mt-2">
                                        <input className="m-0 p-0" type="text" disabled
                                            value="CBAEURPSLVJCMV" />
                                        <img src="../assets/images/exported/code.svg" alt="" />
                                    </div>
                                </div>



                                <button className="buy-sell-btn mt-5">Continue</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-2"></div>
                </div>
            </div>
        );
    }
}

export default BANK_ADD_3;