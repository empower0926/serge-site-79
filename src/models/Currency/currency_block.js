import React, { Component } from 'react';
class CurrencyBlock extends Component {
    state = {  }
    render() { 
        return ( 
            /*  <!-- currency block -->  */
            <div class="col-xl-6 mt-3">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>
         );
    }
}
 
export default CurrencyBlock;