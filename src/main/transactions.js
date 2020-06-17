import React, { Component } from 'react';
class Transactions extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">

    <div class="row">
        <div class="col-xl-4 d-flex p-0 mt-3">
            <span class="my-auto t-count">2346</span>
            <button class="span-pending export-history ml-auto my-2">Export History</button>
        </div>

        <div class="from-to col-xl-8 d-flex justify-content-end p-0 my-2 mt-3">
            <div class="from">
                <span>FROM</span>
                <input type="text"/>
            </div>

            <div class="to ml-4">
                <span>TO</span>
                <input type="text"/>
            </div>
        </div>

        <div class="col-xl-12 d-flex justify-content-end p-0 mt-5">
            <ul class="t-timestamp">
                <li><button>ALL</button></li>
                <li><button>SEND</button></li>
                <li><button>RECENT</button></li>
            </ul>
        </div>

    </div>

    {/* <!-- transacion history shows here --> */}
    <div class="row">
        {/* <!-- transaction row --> */}
        <div class="col-xl-12 blue-block transaction-card">
            <div class="row">
                {/* <!-- left --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-2 d-flex mt-1">
                    <span class="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                    <img class="ml-auto" src="../assets/images/exported/currencies/LTC.svg" alt="LTC"/>
                </div>
                {/* <!-- mid --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-4 d-flex mt-1">
                    <img class="mr-2 arrow" src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
                    <span class="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
                {/* <!-- right --> */}
                <div class="col-xl-4 d-flex mt-1 mb-1">
                    <span class="my-auto t-value">0.0094 LTC</span>
                    <span class="my-auto ml-auto span-completed">Completed <img class="ml-3"
                            src="../assets/images/exported/checked.svg" alt=""/></span>
                </div>
            </div>
        </div>

        {/* <!-- transaction row --> */}
        <div class="col-xl-12 blue-block transaction-card">
            <div class="row">
               {/*  <!-- left --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-2 d-flex mt-1">
                    <span class="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                    <img class="ml-auto" src="../assets/images/exported/currencies/LTC.svg" alt="LTC"/>
                </div>
              {/*   <!-- mid --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-4 d-flex mt-1">
                    <img class="mr-2 arrow" src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
                    <span class="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
                {/* <!-- right --> */}
                <div class="col-xl-4 d-flex mt-1 mb-1">
                    <span class="my-auto t-value">0.0094 LTC</span>
                    <span class="my-auto ml-auto span-completed">Completed <img class="ml-3"
                            src="../assets/images/exported/checked.svg" alt=""/></span>
                </div>
            </div>
        </div>

        {/* <!-- transaction row --> */}
        <div class="col-xl-12 blue-block transaction-card">
            <div class="row">
               {/*  <!-- left --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-2 d-flex mt-1">
                    <span class="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                    <img class="ml-auto" src="../assets/images/exported/currencies/ETH.svg" alt="ETH"/>
                </div>
               {/*  <!-- mid --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-4 d-flex mt-1">
                    <img class="mr-2 arrow" src="../assets/images/exported/mocks/green-arrow.svg" alt=""/>
                    <span class="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
                {/* <!-- right --> */}
                <div class="col-xl-4 d-flex mt-1 mb-1">
                    <span class="my-auto t-value">0.0094 ETH</span>
                    <span class="my-auto ml-auto span-completed">Completed <img class="ml-3"
                            src="../assets/images/exported/checked.svg" alt=""/></span>
                </div>
            </div>
        </div>

        {/* <!-- transaction row --> */}
        <div class="col-xl-12 blue-block transaction-card">
            <div class="row">
               {/*  <!-- left --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-2 d-flex mt-1">
                    <span class="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                    <img class="ml-auto" src="../assets/images/exported/currencies/XRP.svg" alt="XRP"/>
                </div>
                {/* <!-- mid --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-4 d-flex mt-1">
                    <img class="mr-2 arrow" src="../assets/images/exported/mocks/red-arrow.svg" alt=""/>
                    <span class="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
               {/*  <!-- right --> */}
                <div class="col-xl-4 d-flex mt-1 mb-1">
                    <span class="my-auto t-value">0.0094 XRP</span>
                    <span class="my-auto ml-auto span-pending">Pending <img class="ml-3"
                            src="../assets/images/exported/pending.svg" alt=""/></span>
                </div>
            </div>
        </div>

        {/* <!-- transaction row --> */}
        <div class="col-xl-12 blue-block transaction-card">
            <div class="row">
               {/*  <!-- left --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-2 d-flex mt-1">
                    <span class="my-auto mx-auto t-date">16:23, 12 dec 2018</span>
                    <img class="ml-auto" src="../assets/images/exported/currencies/BTC.svg" alt="BTC"/>
                </div>
                {/* <!-- mid --> */}
                <div class="col-xl-1"></div>
                <div class="col-xl-4 d-flex mt-1">
                    <img class="mr-2 arrow" src="../assets/images/exported/mocks/red-arrow.svg" alt=""/>
                    <span class="my-auto">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t</span>
                </div>
                {/* <!-- right --> */}
                <div class="col-xl-4 d-flex mt-1 mb-1">
                    <span class="my-auto t-value">0.0094 BTC</span>
                    <span class="my-auto ml-auto span-completed">Completed <img class="ml-3"
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