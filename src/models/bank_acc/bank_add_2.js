import React, { Component } from 'react';
class BANK_ADD_2 extends Component {
    state = {}
    render() {
        return (
            <div data-aos="fade-up" class="buy-sell-body mt-5">
                <div class="row">
                    <div class="col-xl-2"></div>
                    <div class="col-xl-8 d-flex justify-content-center">
                        <div class="bank-form">
                            <form action="">
                                <div class="blue-block p-3">
                                    <div class="heading">Please include this reference code in your
                                    transfer.</div>
                                    <div class="mt-4">
                                        Without this code, we cannot deposit these funds into
                                        your FlashWallet account.
                                </div>
                                </div>

                                <div class="mt-4">
                                    <span>REFERENCE NUMBER</span>
                                    <div class="reference-input d-flex mt-2">
                                        <input class="m-0 p-0" type="text" disabled value="CBAEURPSLVJCMV" />
                                        <img src="../assets/images/exported/code.svg" alt="" />
                                    </div>
                                </div>

                                <div class="d-flex mt-4">
                                    <input class="refer-check" type="checkbox" />
                                    <span class="mt-1">I’ve copied or written down my Reference
                                    Number</span>
                                </div>

                                <button onClick={this.props.update} class="buy-sell-btn">Continue</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-2"></div>
                </div>
            </div>
        );
    }
}

export default BANK_ADD_2;