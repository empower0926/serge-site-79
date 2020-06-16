import React, { Component } from 'react';
class Transaction extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="transaction" className="row mt-2 transaction mx-1">
    <div className="col-xl-12 d-flex">
        <div>
            <span className="transaction-date">16:23, 12 dec 2018</span>
        </div>
        <div className="ml-auto">
            <img src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
            <span className="transaction-value">0.009 BTC</span>
        </div>
    </div>

    <div className="col-xl-12 mt-3">
        <span className="transaction-code">1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</span>
    </div>
</div>
         );
    }
}
 
export default transaction;