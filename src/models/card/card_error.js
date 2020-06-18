import React, { Component } from 'react';

class CardError extends Component {
    state = {}
    render() {
        return (
            <div data-aos="fade-up" class="buy-sell-body mt-5 d-flex justify-content-center">
                <div class="card-succes">
                    <img src="../assets/images/exported/warning.svg" alt="" />
                    <div class="card-message mx-auto mt-5">Oops something's wrong…</div>
                    <div class="mt-5">Processed by <a href="#">FlashWallet</a></div>
                </div>
            </div>
        );
    }
}

export default CardError;