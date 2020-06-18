import React, { Component } from 'react';
class CardSuccess extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="buy-sell-body mt-5 d-flex justify-content-center">
    <div class="card-succes">
        <img src="../assets/images/exported/star-outlined.svg" alt=""/>
        <div class="card-message mx-auto mt-5">Your card has been successfully associated!</div>
        <div class="mt-5">Processed by <a href="#">FlashWallet</a></div>
    </div>
</div>
         );
    }
}
 
export default CardSuccess;