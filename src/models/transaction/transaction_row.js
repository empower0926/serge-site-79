import React, { Component } from 'react';



class TransactionRow extends Component {
   
    render() { 
        return (  
            /* <!-- transaction row --> */
        <div className="col-xl-12 blue-block transaction-card">
        <div className="row">
           {/*  <!-- left --> */}
            <div className="col-xl-1"></div>
            <div className="col-xl-2 d-flex mt-1">
                <span className="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                <img className="ml-auto" src="../assets/images/exported/currencies/XRP.svg" alt="XRP"/>
            </div>
            {/* <!-- mid --> */}
            <div className="col-xl-1"></div>
            <div className="col-xl-4 d-flex mt-1">
                <img className="mr-2 arrow" src={this.props.arrowimg} alt=""/>
                <span className="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
            </div>
           {/*  <!-- right --> */}
            <div className="col-xl-4 d-flex mt-1 mb-1">
                <span className="my-auto t-value">0.0094 XRP</span>
                {this.props.button}
            </div>
        </div>
    </div>

        );
    }
}
 
export default TransactionRow;