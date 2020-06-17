import React, { Component } from 'react';
import {NewsFeed_01} from '../models/News/newsfeed_01'
import {NewsFeed_02} from '../models/News/newsfeed_02'
import {NewsFeed_03} from '../models/News/newsfeed_03'
import {NewsFeed_04} from '../models/News/newsfeed_04'
import {NewsFeed_05} from '../models/News/newsfeed_05'
class News extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
    <div className="row">

        {/* <!-- left side --> */}
        <div className="col-xl-8">
            <div className="row">

                <NewsFeed_01/>

                <NewsFeed_02/>
            </div>



            <div className="row">
                
                <NewsFeed_03/>
                <NewsFeed_04/>
            </div>
        </div>

        {/* <!-- right side --> */}
        <div className="tile-parent col-xl-4">
            <NewsFeed_05/>
        </div>
    </div>
</div>
         );
    }
}
 
export default News;