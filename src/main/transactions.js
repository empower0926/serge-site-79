import React, { Component } from 'react';
import TransactionRow from '../models/transaction/transaction_row'
import {PendingBtn} from '../models/transaction/transaction_pendingbtn'
import {CompleteBtn} from '../models/transaction/transaction_completebtn'
class Transactions extends Component {
    state = { 
        red_arrow:"../assets/images/exported/mocks/red-arrow.svg",
        green_arrow:"../assets/images/exported/mocks/green-arrow.svg"
     }
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
       <TransactionRow button={<PendingBtn/>}arrowimg={this.state.green_arrow}/>
       <TransactionRow button={<CompleteBtn/>} arrowimg={this.state.red_arrow}/>
       <TransactionRow button={<PendingBtn/>}arrowimg={this.state.green_arrow}/>
       <TransactionRow button={<CompleteBtn/>} arrowimg={this.state.red_arrow}/>
    </div>

</div>
         );
    }
}
 
export default Transactions;