import React, { Component } from 'react';

class CARDLINK_1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="buy-sell-body mt-5">
    <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 d-flex justify-content-center">
            <div className="bank-form">
                <form onSubmit={this.props.update}  action="">
                    <div>
                        <span>COUNTRY</span>
                        <select className="bank-select" name="" id="">
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="INDIA">INDIA</option>
                            <option value="ANOTHER COUNTRY">ANOTHER COUNTRY</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <span>ADDRESS (1)</span>
                        <input type="text"/>
                    </div>

                    <div className="mt-4">
                        <span>ADDRESS (2)</span>
                        <input type="text"/>
                    </div>

                    <div className="mt-4 d-flex justify-content-center">
                        <div className="col p-0 mr-1">
                            <span>CITY</span>
                            <input type="text"/>
                        </div>

                        <div className="col p-0 ml-1">
                            <span>POSTAL CODE</span>
                            <input type="text"/>
                        </div>
                    </div>

                    <button className="buy-sell-btn">Continue</button>
                </form>
            </div>
        </div>
        <div className="col-xl-2"></div>
    </div>
</div>
         );
    }
}
 
export default CARDLINK_1;