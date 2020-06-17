import React, { Component } from 'react';



class WalletCard extends Component {
    
   

    render() { 
        return ( 
            
            <div className="tile-parent col-xl-4" data-aos="fade-up"  onClick={() => this.props.update()}>
    <div className="tile">
        <div className="row">
            <div className="col-xl-12 d-flex">
                <img src="../assets/images/exported/currencies/BTC.svg" alt="BTC"/>
                <span className="currency-name">Bitcoin</span>
                <span className="currency-value ml-auto">0.221746</span>
            </div>
            <div className="col-xl-12 d-flex justify-content-center">
                <img className="wallet-chart" src="../assets/images/exported/mocks/Path 15.svg" alt="chart"/>
            </div>
            <div className="col-xl-12 mt-4">
                <div className="blue-block">
                    <div className="d-flex">
                        <span className="wallet-time">12:40, 12 dec 2018</span>
                        <span className="wallet-value ml-auto">+1.045 BTC</span>
                    </div>
                    <div className="mt-3">
                        <span>1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

         );
    }
}
 
export default WalletCard;