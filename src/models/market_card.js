import React, { Component } from 'react';
class MarketCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tile-parent col-xl-3" data-aos="fade-up" onClick={() => this.props.update()}>
    <div className="tile">
        <div className="row">
            <div className="col-xl-12 d-flex">
                <span className="market-name align-self-center">ETH/USD</span>
                <span className="market-value ml-auto">1,307.96  USD</span>
            </div>

            <div className="col-xl-12 mt-4">
                <img className="market-chart" src="../assets/images/exported/mocks/Path 15.svg" alt=""/>
            </div>

            <div className="col-xl-12 d-flex mt-4">
                <span>Volume: 126,478 LTC</span>
                <span className="rate ml-auto">1.93</span>
            </div>
        </div>
    </div>
</div>
         );
    }
}
 
export default MarketCard;