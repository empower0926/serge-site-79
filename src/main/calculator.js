import React, { Component } from 'react';
import Currencyblock from '../models/Currency/currency_block'

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputvalue: '',
            from: "BTC",
            to: "BTC",
            output: 0
        }
    }

    handleButton(number) {

        this.setState({ inputvalue: this.state.inputvalue + number });
    }
    handlefrom = (event) => {
        this.setState({ from: event.target.value });
    }
    handleto = (event) => {
        this.setState({ to: event.target.value });
    }
    showResult() {
        this.setState({ output: this.state.inputvalue });
    }
    clearCal() {
        this.setState({ inputvalue: '', output: '0' });
    }
    render() {
        return (
            <div data-aos="fade-up" className="container-fluid">
                <div className="row mt-5">

                    {/* <!-- left --> */}
                    <div className="col-xl-5 calculator">
                        <div className="row">
                            <div className="col-xl-4 p-0 mt-2">
                                <div className="blue-text">FROM</div>
                                <select onChange={this.handlefrom} name="from-currency" id="from-currency" className="currency-select">
                                    <option value="BTC">Bitcoin (BTC)</option>
                                    <option value="LTC">Litecoin (LTC)</option>
                                    <option value="OZTG">OZTG</option>
                                    <option value="ETH">Ethirium (ETH)</option>
                                </select>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <img className="convert-img" src="../assets/images/exported/convert.svg" alt="" />
                            </div>
                            <div className="col-xl-4 p-0 mt-2">
                                <div className="blue-text">TO</div>
                                <select onChange={this.handleto} name="to-currency" id="to-currency" className="currency-select">
                                    <option value="BTC">Bitcoin (BTC)</option>
                                    <option value="LTC">Litecoin (LTC)</option>
                                    <option value="OZTG">OZTG</option>
                                    <option value="ETH">Ethirium (ETH)</option>
                                </select>
                            </div>
                        </div>

                        {/*  <!-- cal --> */}
                        <div className="row mt-4">
                            <span className="blue-text my-2">ENTER AMOUNT</span>
                        </div>
                        <div className="row">
                            <div className="d-flex cal-input">
                                <input type="text" placeholder="0" value={this.state.inputvalue} />
                                <button onClick={() => this.showResult()} className="cal-ok"><img src="../assets/images/exported/cal-ok.svg" alt="" /></button>
                            </div>
                        </div>

                        {/*  <!-- numbers --> */}
                        <div className="row mt-3">
                            <div className="col p-0">
                                <div data-aos="fade-up" onClick={() => this.handleButton('7')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">7</button>
                                </div>
                            </div>

                            <div className="col">
                                <div data-aos="fade-up" data-aos-delay="50" onClick={() => this.handleButton('8')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">8</button>
                                </div>
                            </div>

                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="100" onClick={() => this.handleButton('9')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">9</button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="150" onClick={() => this.handleButton('4')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">4</button>
                                </div>
                            </div>

                            <div className="col">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('5')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">5</button>
                                </div>
                            </div>

                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('6')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">6</button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('1')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">1</button>
                                </div>
                            </div>

                            <div className="col">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('2')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">2</button>
                                </div>
                            </div>

                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('3')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">3</button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('0')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">0</button>
                                </div>
                            </div>

                            <div className="col">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('.')} className="blue-block d-flex justify-content-center">
                                    <button className="cal-btn">.</button>
                                </div>
                            </div>

                            <div className="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.clearCal()} className="blue-block cal-cancel d-flex justify-content-center">
                                    <button className="cal-btn">C</button>
                                </div>
                            </div>
                        </div>


                        {/* <!-- results --> */}
                        <div className="row">
                            <div className="col-xl-12 p-0 mt-3">
                                <div className="cal-output">
                                    {/* <!-- show results here --> */}
                                    <div className="row d-flex">
                                        <div className="col-xl-6 d-flex justify-content-center">{this.state.output}</div>
                                        <div className="col-xl-6 d-flex justify-content-center currency-rate">{this.state.from}= 3748.76 {this.state.to}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/*  <!-- right --> */}
                    <div className="col-xl-7 mt-2">
                        <div className="row">
                            {/* <!-- currency blocks show here --> */}

                            <Currencyblock />
                            <Currencyblock />
                            <Currencyblock />
                            <Currencyblock />
                            <Currencyblock />
                            <Currencyblock />

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Calculator;