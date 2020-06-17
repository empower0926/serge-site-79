import React, { Component } from 'react';
class WalletAddCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tile-parent col-xl-4" data-aos="fade-up">
    <div className="add-tile d-flex justify-content-center">
        <div className="row my-auto">
            <div className="col-xl-12">
                <div><img className="align-self-center" src="../assets/images/exported/mocks/add.svg" alt="add"/></div>
                <div className="mt-2"><span>Add wallet</span></div>
            </div>
        </div>
    </div>
</div>
         );
    }
}
 
export default WalletAddCard;