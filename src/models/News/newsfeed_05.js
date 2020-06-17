import React from 'react';
export const NEWSFEED_05 = (props) =>{
    return(
        <div data-aos="fade-up" data-aos-delay="200" className="news-tile">
                <div className="news-timestamp mt-2">
                    <span className="align-self-end ml-3">Jan 09, 2018</span>
                </div>
                <img className="news-img" src="../assets/images/exported/mocks/news/5.svg" alt=""/>
                <div className="news-header">
                    <h5 className="sidebar-heading">Bitcoin Price Leads Crypto Comeback after Market Briefly Dips Below $250 Billion</h5>
                </div>
                <div className="news-p">
                    <p>Slump Begone: What’s Next For Cryptocurrencies?</p>
                    <p>Israel Releases Draft Plan for Taxing ICOs</p>
                    <p>Bitcoin's Price Drops Below $10,000 for First Time Since Early December</p>
                    <p>As Bitcoin's Slide Continues, Prices Look Towards $8K</p>
                </div>
            </div>
    );
}