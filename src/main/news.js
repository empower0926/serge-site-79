import React, { Component } from 'react';
import {NEWSFEED_01} from '../models/News/NEWSFEED_01'
import {NEWSFEED_02} from '../models/News/NEWSFEED_02'
import {NEWSFEED_03} from '../models/News/NEWSFEED_03'
import {NEWSFEED_04} from '../models/News/NEWSFEED_04'
import {NEWSFEED_05} from '../models/News/NEWSFEED_05'
class News extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
    <div className="row">

        {/* <!-- left side --> */}
        <div className="col-xl-8">
            <div className="row">

                <NEWSFEED_01/>

                <NEWSFEED_02/>
            </div>



            <div className="row">
                
                <NEWSFEED_03/>
                <NEWSFEED_04/>
            </div>
        </div>

        {/* <!-- right side --> */}
        <div className="tile-parent col-xl-4">
            <NEWSFEED_05/>
        </div>
    </div>
</div>
         );
    }
}
 
export default News;