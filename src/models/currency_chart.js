import React, { Component } from 'react';
class CurrencyChart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tile" data-aos="fade-left" data-aos-duration="3000">
            <div className="row">
                <div className="tile-nav col-xl-12 chart-nav">
                    <div>
                        <span className="heading">{this.props.title}</span>
                    </div>
                    <div className="times">
                        <span className="time-select">1m</span>
                        <span className="time-select">6m</span>
                        <span className="time-select">1y</span>
                        <span className="time-select">all</span>
                    </div>
                </div>

                {/* <!-- chart --> */}
                <div className="col-xl-12">
                    <div className="chart d-flex justify-content-center mt-5">
                        {/* <!-- put your chart here --> */}
                    </div>
                </div>
            </div>
        </div>
    
         );
    }
}
 
export default CurrencyChart;