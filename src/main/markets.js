import React, { Component } from 'react';
import MarketCard from '../models/market_card'
class Markets extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid" onClick={() => this.props.update()}>
                <div className="row">
                    <MarketCard update={this.props.update} />
                    <MarketCard update={this.props.update} />
                    <MarketCard update={this.props.update} />
                    <MarketCard update={this.props.update} />
                    <MarketCard update={this.props.update} />
                    <MarketCard update={this.props.update} />
                </div>
            </div>
        );
    }
}

export default Markets;