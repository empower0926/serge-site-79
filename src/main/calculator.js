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
            <div data-aos="fade-up" class="container-fluid">
                <div class="row mt-5">

                    {/* <!-- left --> */}
                    <div class="col-xl-5 calculator">
                        <div class="row">
                            <div class="col-xl-4 p-0 mt-2">
                                <div class="blue-text">FROM</div>
                                <select onChange={this.handlefrom} name="from-currency" id="from-currency" class="currency-select">
                                    <option value="BTC">Bitcoin (BTC)</option>
                                    <option value="LTC">Litecoin (LTC)</option>
                                    <option value="OZTG">OZTG</option>
                                    <option value="ETH">Ethirium (ETH)</option>
                                </select>
                            </div>
                            <div class="col-xl-4 d-flex justify-content-center">
                                <img class="convert-img" src="../assets/images/exported/convert.svg" alt="" />
                            </div>
                            <div class="col-xl-4 p-0 mt-2">
                                <div class="blue-text">TO</div>
                                <select onChange={this.handleto} name="to-currency" id="to-currency" class="currency-select">
                                    <option value="BTC">Bitcoin (BTC)</option>
                                    <option value="LTC">Litecoin (LTC)</option>
                                    <option value="OZTG">OZTG</option>
                                    <option value="ETH">Ethirium (ETH)</option>
                                </select>
                            </div>
                        </div>

                        {/*  <!-- cal --> */}
                        <div class="row mt-4">
                            <span class="blue-text my-2">ENTER AMOUNT</span>
                        </div>
                        <div class="row">
                            <div class="d-flex cal-input">
                                <input type="text" placeholder="0" value={this.state.inputvalue} />
                                <button onClick={() => this.showResult()} class="cal-ok"><img src="../assets/images/exported/cal-ok.svg" alt="" /></button>
                            </div>
                        </div>

                        {/*  <!-- numbers --> */}
                        <div class="row mt-3">
                            <div class="col p-0">
                                <div data-aos="fade-up" onClick={() => this.handleButton('7')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">7</button>
                                </div>
                            </div>

                            <div class="col">
                                <div data-aos="fade-up" data-aos-delay="50" onClick={() => this.handleButton('8')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">8</button>
                                </div>
                            </div>

                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="100" onClick={() => this.handleButton('9')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">9</button>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="150" onClick={() => this.handleButton('4')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">4</button>
                                </div>
                            </div>

                            <div class="col">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('5')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">5</button>
                                </div>
                            </div>

                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('6')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">6</button>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('1')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">1</button>
                                </div>
                            </div>

                            <div class="col">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('2')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">2</button>
                                </div>
                            </div>

                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('3')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">3</button>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('0')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">0</button>
                                </div>
                            </div>

                            <div class="col">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.handleButton('.')} class="blue-block d-flex justify-content-center">
                                    <button class="cal-btn">.</button>
                                </div>
                            </div>

                            <div class="col p-0">
                                <div data-aos="fade-up" data-aos-delay="200" onClick={() => this.clearCal()} class="blue-block cal-cancel d-flex justify-content-center">
                                    <button class="cal-btn">C</button>
                                </div>
                            </div>
                        </div>


                        {/* <!-- results --> */}
                        <div class="row">
                            <div class="col-xl-12 p-0 mt-3">
                                <div class="cal-output">
                                    {/* <!-- show results here --> */}
                                    <div class="row d-flex">
                                        <div class="col-xl-6 d-flex justify-content-center">{this.state.output}</div>
                                        <div class="col-xl-6 d-flex justify-content-center currency-rate">{this.state.from}= 3748.76 {this.state.to}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/*  <!-- right --> */}
                    <div class="col-xl-7 mt-2">
                        <div class="row">
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