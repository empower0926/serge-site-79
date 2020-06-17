import React from 'react';
export const NewsFeed_02 = (props) =>{
    return(
        <div className="tile-parent col-xl-8">

                    {/* <!-- in here, change the .mid-news background URL --> */}
                    <div className="news-tile d-flex mid-news">
                        <div className="news-body my-auto p-4">
                            <div className="news-timestamp mt-2">
                                <span>Jan 09, 2018</span>
                            </div>
                            <div className="news-header d-flex mt-5">
                                <h5 className="my-auto p-0">One Coin to Play Them All: A Startup to Make In-game Digital Currency Available on Multiple Platforms</h5>
                            </div>
                            
                            <button className="read-more">Read more</button>
                        </div>
                    </div>
                </div>
    );
}