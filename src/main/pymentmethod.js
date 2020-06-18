import React, { Component } from "react";
import BankAdd1 from '../models/bank_acc/bank_add_1'
import BankAdd2 from '../models/bank_acc/bank_add_2'
import BankAdd3 from '../models/bank_acc/bank_add_3'
import CardLink1 from '../models/card/card_link_1'
import CardLink2 from '../models/card/card_link_2'
import CardError from '../models/card/card_error'
import CardSuccess from '../models/card/card_success'




class BuySell extends Component {

    constructor(props) {
        super(props);
        this.state={
            value: <BankAdd1 update={() => this.BankChange("1")}/>,
            Cardclass:"col buy-sell-header card-select",
            Bankclass:"col buy-sell-header ",  
        }
    }
    BankChange (para){
        if(para==="1"){
            this.setState({ value: <BankAdd2 update={() => this.BankChange("2")} />});
        }else if(para==="2"){
            this.setState({ value: <BankAdd3   toBuysell={this.props.toBuysell}/>});
           
        }
        
    }
    CardChange (para){
        if(para==="1"){
            this.setState({ value: <CardLink2 update={() => this.CardChange("2")} success={() => this.CardSuccess()}/>});
            issuccess="error";
        }else if(para==="2"){
            if(issuccess==="success"){
                this.setState({ value: <CardSuccess />});
            }else{
                this.setState({ value: <CardError/>});
            }  
        }

    }
    CardSuccess(){
       issuccess="success";
    }
Chnge(para) {
if(para==="Card"){
    this.setState({ value: <CardLink1 update={() => this.CardChange("1")}/> });
    this.setState({ Cardclass: "col buy-sell-header " });
    this.setState({ Bankclass: "col buy-sell-header card-select" });
}else{
    this.setState({ value: <BankAdd1 update={() => this.BankChange("1")} />});
    this.setState({ Cardclass: "col buy-sell-header card-select" });
    this.setState({ Bankclass: "col buy-sell-header " });
}
}
  render() {
    return (
        <div data-aos="fade-up" className="container-fluid buy-sell">
        
                <div className="row">
                    <div className="col-xl-6 tile py-0">
                        <div className="row">

                            <div className="col-xl-12 d-flex close-btn">
                                <button onClick={this.props.update} className="ml-auto"><img src="../assets/images/exported/cross.svg" alt="" /></button>
                            </div>

                            <div onClick={() => this.Chnge("Card")} className={this.state.Cardclass}>
                                Card
                    </div>

                            <div onClick={() => this.Chnge("Bank")} className={this.state.Bankclass}>
                                Bank Account
                    </div>
                        </div>

                        <div className="row">
                            <div data-aos="fade-up" data-aos-delay="50" className="col-xl-12">
                                {/* <!-- body changes here --> */}
                                {this.state.value}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
let issuccess="error";
export default BuySell;
