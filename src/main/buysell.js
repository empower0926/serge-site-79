import React, { Component } from 'react';
import Buy from '../models/buy_sell/buy'
import BuyRight from '../models/buy_sell/buy_right'
import Sell from '../models/buy_sell/sell'
import SellRight from '../models/buy_sell/sell_right'

class Buysell extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: <Buy/>,
            right:<BuyRight/>,
            Buyclass:"col buy-sell-header ",
            Sellclass:"col buy-sell-header card-select",  
        }
    }
    Chnge(para) {
        if(para==="Buy"){
            this.setState({ value: <Buy/>});
            this.setState({  right:<BuyRight/>});
            this.setState({ Buyclass: "col buy-sell-header" });
            this.setState({ Sellclass: "col buy-sell-header card-select" });
        }else{
            this.setState({ value: <Sell/>});
            this.setState({  right:<SellRight/>});
            this.setState({ Buyclass: "col buy-sell-header card-select" });
            this.setState({ Sellclass: "col buy-sell-header" });
        }
        }
    render() { 
        return ( 
            <div data-aos="fade-up" className="container-fluid buy-sell">
    <div className="row">
        <div className="col-xl-6 tile py-0">
            <div className="row">

                <div className="col-xl-12 d-flex close-btn">
                    <button onClick={this.props.update} className="ml-auto"><img src="../assets/images/exported/cross.svg" alt=""/></button>
                </div>

                <div onClick={() => this.Chnge("Buy")} className={this.state.Buyclass}>
                    Buy
                </div>

                <div onClick={() => this.Chnge("Sell")} className={this.state.Sellclass}>
                    Sell
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">


                {this.state.value}
                    

                </div>
            </div>
        </div>


        {/* <!-- right side --> */}
        <div className="col-xl-1"></div>
        {this.state.right}
    </div>
</div>
         );
    }
}
 
export default Buysell;