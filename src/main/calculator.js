import React, { Component } from 'react';
class Calculator extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container-fluid">
    <div class="row mt-5">

        {/* <!-- left --> */}
        <div class="col-xl-4 calculator">
            <div class="row">
                <div class="col-xl-4 p-0 mt-2">
                    <div class="blue-text">FROM</div>
                    <select name="from-currency" id="from-currency" class="currency-select">
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="LTC">Litecoin (LTC)</option>
                        <option value="OZTG">OZTG</option>
                        <option value="ETH">Ethirium (ETH)</option>
                    </select>
                </div>
                <div class="col-xl-4 d-flex justify-content-center">
                    <img class="convert-img" src="../assets/images/exported/convert.svg" alt=""/>
                </div>
                <div class="col-xl-4 p-0 mt-2">
                    <div class="blue-text">TO</div>
                    <select name="to-currency" id="to-currency" class="currency-select">
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
                    <input type="text"/>
                    <button class="cal-ok"><img src="../assets/images/exported/cal-ok.svg" alt=""/></button>
                </div>
            </div>

           {/*  <!-- numbers --> */}
            <div class="row mt-3">
                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">7</button>
                    </div>
                </div>

                <div class="col">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">8</button>
                    </div>
                </div>

                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">9</button>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">4</button>
                    </div>
                </div>

                <div class="col">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">5</button>
                    </div>
                </div>

                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">6</button>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">1</button>
                    </div>
                </div>

                <div class="col">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">2</button>
                    </div>
                </div>

                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">3</button>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col p-0">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">0</button>
                    </div>
                </div>

                <div class="col">
                    <div class="blue-block d-flex justify-content-center">
                        <button class="cal-btn">.</button>
                    </div>
                </div>

                <div class="col p-0">
                    <div class="blue-block cal-cancel d-flex justify-content-center">
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
                            <div class="col-xl-6 d-flex justify-content-center">0.3333333333333</div>
                            <div class="col-xl-6 d-flex justify-content-center currency-rate">BTC = 3748.76 USD
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="col-xl-1"></div>

       {/*  <!-- right --> */}
        <div class="col-xl-7 mt-2">
            <div class="row">
                {/* <!-- currency blocks show here --> */}

                {/* <!-- currency block --> */}
                <div class="col-xl-6 mt-3">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- currency block --> */}
                <div class="col-xl-6 mt-3">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- currency block --> */}
                <div class="col-xl-6 mt-4">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- currency block --> */}
                <div class="col-xl-6 mt-4">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- currency block --> */}
                <div class="col-xl-6 mt-4">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- currency block --> */}
                <div class="col-xl-6 mt-4">
                    <div class="currency-block p-3">
                        <div class="row">
                            <div class="col-xl-12 d-flex">
                                <span class="currency-name">Bitcoin</span>
                                <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2">
                                <img class="w-100" src="../assets/images/exported/mocks/red-graph.svg" alt=""/>
                            </div>

                            <div class="col-xl-12 mt-2 d-flex">
                                <span class="current-percentage mt-4 align-self-center">-179.87</span>
                                <span class="currency-usd ml-auto">11 329.2</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


         );
    }
}
 
export default Calculator;