import React, { Component } from 'react';
import TransactionRow from '../models/transaction/transaction_row'

class Transactions extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">

    <div className="row">
        <div className="col-xl-4 d-flex p-0 mt-3">
            <span className="my-auto t-count">2346</span>
            <button className="span-pending export-history ml-auto my-2">Export History</button>
        </div>

        <div className="from-to col-xl-8 d-flex justify-content-end p-0 my-2 mt-3">
            <div className="from">
                <span>FROM</span>
                <input type="text"/>
            </div>

            <div className="to ml-4">
                <span>TO</span>
                <input type="text"/>
            </div>
        </div>

        <div className="col-xl-12 d-flex justify-content-end p-0 mt-5">
            <ul className="t-timestamp">
                <li><button>ALL</button></li>
                <li><button>SEND</button></li>
                <li><button>RECENT</button></li>
            </ul>
        </div>

    </div>

    {/* <!-- transacion history shows here --> */}
    <div className="row">
       <TransactionRow/>
        {/* <!-- transaction row --> */}
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
                    <img className="mr-2 arrow" src="../assets/images/exported/mocks/red-arrow.svg" alt=""/>
                    <span className="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
               {/*  <!-- right --> */}
                <div className="col-xl-4 d-flex mt-1 mb-1">
                    <span className="my-auto t-value">0.0094 XRP</span>
                    <span className="my-auto ml-auto span-pending">Pending <img className="ml-3"
                            src="../assets/images/exported/pending.svg" alt=""/></span>
                </div>
            </div>
        </div>

        {/* <!-- transaction row --> */}
        <div className="col-xl-12 blue-block transaction-card">
            <div className="row">
               {/*  <!-- left --> */}
                <div className="col-xl-1"></div>
                <div className="col-xl-2 d-flex mt-1">
                    <span className="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                    <img className="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt="BTC"/>
                </div>
                {/* <!-- mid --> */}
                <div className="col-xl-1"></div>
                <div className="col-xl-4 d-flex mt-1">
                    <img className="mr-2 arrow" src="../assets/images/exported/mocks/red-arrow.svg" alt=""/>
                    <span className="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
                {/* <!-- right --> */}
                <div className="col-xl-4 d-flex mt-1 mb-1">
                    <span className="my-auto t-value">0.0094 BTC</span>
                    <span className="my-auto ml-auto span-completed">Completed <img className="ml-3"
                            src="../assets/images/exported/checked.svg" alt=""/></span>
                </div>
            </div>
        </div>


    </div>

</div>
         );
    }
}
 
export default Transactions;