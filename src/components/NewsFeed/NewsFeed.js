import React, { Component, useState } from 'react';
import NewsFeedCategories from '../NewsFeedCategories/NewsFeedCategories';
import Modal from 'react-modal';
import Moment from 'react-moment';

export default class NewsFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        let newsfilterAPI = 'https://static.newsfilter.io/landing-page/main-content.json';
        fetch(newsfilterAPI)
        .then((response) => response.json())
        .then((data) => this.setState({data})); 
    }
    
    render() {

        const { data } = this.state;
        console.log(data);
        return (
                <div className="main_content">
                    <div className="main_content_inner">
                        <h1> News Feed </h1>
                        <NewsFeedCategories/>
                        {data.map((dataContent, index)=> (
                            <div class="uk-grid-large" uk-grid>
                         <div class="uk-width-expand@m uk-first-column"> 
                         {dataContent.imageUrl.length > 0 ?
                                <a href={dataContent.url} className="blog-post" target="_blank" rel="noopener">
                                    <div className="blog-post-thumbnail">
                                        <div className="blog-post-thumbnail-inner">
                                            <img src={dataContent.imageUrl}/>
                                        </div>
                                    </div>
                                    <div className="blog-post-content">
                                   <div className="blog-post-content-info">
                                       <span className="blog-post-info-tag button soft-primary">{dataContent.source.name}</span>
                                       <span className="blog-post-info-date">
                                            <Moment format="LLL" withTitle>
                                                   {dataContent.publishedAt}
                                            </Moment>
                                        </span>
                                   </div>
                                   <h3>{dataContent.title}</h3>
                                   <p>{dataContent.description}</p>
                                        <a href={dataContent.url} target="_blank" rel="noopener"><button class="button primary circle readMore">Read More</button></a>
                               </div>
                                    {/* <Modal isOpen={true}>
                                            <h1>test</h1>
                                    </Modal> */}
                                </a>
                               :   <a href={dataContent.url} className="blog-post" target="_blank" rel="noopener">
                              <div className="blog-post-content">
                                   <div className="blog-post-content-info">
                                       <span className="blog-post-info-tag button soft-primary">{dataContent.source.name}</span>
                                       <span className="blog-post-info-date">
                                           <Moment format="LLL" withTitle>
                                                 {dataContent.publishedAt}
                                           </Moment>
                                       </span>
                                   </div>
                                   <h3>{dataContent.title}</h3>
                                   <p>{dataContent.description}</p>
                                        <a href={dataContent.url} target="_blank" rel="noopener"> <button class="button primary circle readMore">Read More</button></a>
                               </div>
                           </a>  }
                            
                            {/* <LiveVideoFeeds/> */}
                            </div>
                         </div>
                        ))
                        }
                    </div>
            </div>
    
        )
    }
}