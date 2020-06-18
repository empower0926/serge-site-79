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
            Buyclass:"",
            Sellclass:"",  
        }
    }
    Chnge(para) {
        if(para==="Buy"){
            this.setState({ value: <Buy/>});
            this.setState({  right:<BuyRight/>});
            this.setState({ Buyclass: "" });
            this.setState({ Sellclass: "" });
        }else{
            this.setState({ value: <Sell/>});
            this.setState({  right:<SellRight/>});
            this.setState({ Buyclass: "" });
            this.setState({ Sellclass: "" });
        }
        }
    render() { 
        return ( 
            <div data-aos="fade-up" class="container-fluid buy-sell">
    <div class="row">
        <div class="col-xl-6 tile py-0">
            <div class="row">

                <div class="col-xl-12 d-flex close-btn">
                    <button onClick={this.props.update} class="ml-auto"><img src="../assets/images/exported/cross.svg" alt=""/></button>
                </div>

                <div onClick={() => this.Chnge("Buy")} class="col buy-sell-header">
                    Buy
                </div>

                <div onClick={() => this.Chnge("Sell")} class="col buy-sell-header">
                    Sell
                </div>
            </div>

            <div class="row">
                <div class="col-xl-12">


                {this.state.value}
                    

                </div>
            </div>
        </div>


        {/* <!-- right side --> */}
        {this.state.right}
    </div>
</div>
         );
    }
}
 
export default Buysell;