import React, { Component } from 'react';
import WallertCard from '../models/wallet_card'



class Wallets extends Component {
    
   constructor(props) {
    super(props);
    this.state = { value:""}
}

   
    render() { 
        return ( 
            <div className="container-fluid" onClick={() => this.props.update()}>
    <div className="row">
<WallertCard update={this.props.update}/>
<WallertCard update={this.props.update}/>
<WallertCard update={this.props.update}/>
            
    </div>
</div>
         );
    }
}
 
export default Wallets;