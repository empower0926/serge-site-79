import React, { Component } from 'react';
class CurrencyBlock extends Component {
    state = {  }
    render() { 
        return ( 
            /*  <!-- currency block -->  */
            <div className="col-xl-6 mt-3">
                    <div className="currency-block p-3">
                        <div className="row">
                            <div className="col-xl-12 d-flex">
                                <span className="currency-name">Bitcoin</span>
                                <img className="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div className="col-xl-12 mt-2">
                                <img className="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div className="col-xl-12 mt-2 d-flex">
                                <span className="current-percentage mt-4 align-self-center">-179.87</span>
                                <span className="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>
         );
    }
}
 
export default CurrencyBlock;