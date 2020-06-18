import React, { Component } from "react";
import BankAdd1 from '../models/bank_acc/bank_add_1'
import BankAdd2 from '../models/bank_acc/bank_add_2'
import BankAdd3 from '../models/bank_acc/bank_add_3'


class BuySell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: <BankAdd1 update={() => this.CardChange("1")} />,
            Cardclass: "",
            Bankclass: ""
        }
    }
    CardChange(para) {

        if (para === "1") {
            this.setState({ value: <BankAdd2 update={() => this.CardChange("2")} /> });
        } else if (para === "2") {
            this.setState({ value: <BankAdd3 /> });
        }



    }
    Chnge(para) {
        if (para === "Card") {
            this.setState({ value: <BankAdd1 update={() => this.CardChange("1")} /> });
            this.setState({ Cardclass: "" });
            this.setState({ Bankclass: "" });
        } else {
            this.setState({ value: <BankAdd1 update={() => this.CardChange("1")} /> });
            this.setState({ Cardclass: "" });
            this.setState({ Bankclass: "" });
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

                            <div onClick={() => this.Chnge("Card")} className="col buy-sell-header">
                                Card
                    </div>

                            <div onClick={() => this.Chnge("Bank")} className="col buy-sell-header">
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

export default BuySell;
