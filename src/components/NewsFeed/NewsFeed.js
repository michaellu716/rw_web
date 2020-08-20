import React, { Component } from 'react';
import Moment from 'react-moment';

export default class NewsFeed extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: [],
            filterData: [],
            filterInput: '',
            selectedOption: ''
        }
    }
    componentDidMount(){
        fetch('https://static.newsfilter.io/landing-page/main-content.json')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                data: data,
                filterData: data
            })
        }); 
    }

    handleChange = (event) => {
        const value = event.target.value.trimLeft();
        event.target.value = event.target.value.trimLeft();
        let filterSelect = [];
        if(this.state.selectedOption !== '') {
            filterSelect = this.state.data.filter(val => val.source.id === this.state.selectedOption.toLowerCase())
        } else {
            filterSelect = this.state.data;
        }
        let filterArr = filterSelect.filter(val => (val.title.toLowerCase().includes(value.toLowerCase()) === true || val.description.toLowerCase().includes(value.toLowerCase()) === true || val.content.toLowerCase().includes(value.toLowerCase()) === true))
        this.setState({
          ...this.state,
          filterInput: value,
          filterData: value === '' ? filterSelect : filterArr
        });
    };

    toggleOption = (event) => {
        const value = event.target.value;
        this.setState({
            selectedOption: value,
        }, () => {
            let filterSelect = [];
            if(this.state.selectedOption !== '') {
                filterSelect = this.state.data.filter(val => val.source.id === this.state.selectedOption.toLowerCase())
            } else {
                filterSelect = this.state.data;
            }
            let filterArr = filterSelect;
            if (this.state.filterInput !== '') {
                filterArr = filterSelect.filter(val => (val.title.toLowerCase().includes(this.state.filterInput.toLowerCase()) === true || val.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) === true || val.content.toLowerCase().includes(this.state.filterInput.toLowerCase()) === true))
            }
            this.setState({
            ...this.state,
            filterData: filterArr
            });
        });
    };

    addWatchList (dataContent) {
        let watchList = [];
        let duplicate = false;
        watchList = localStorage.getItem('watchList') === undefined || localStorage.getItem('watchList') === null ? [] : (JSON.parse(localStorage.getItem('watchList')).length === 0 ? [] : JSON.parse(localStorage.getItem('watchList')));
        watchList.forEach(element => {
            if (element.title === dataContent.title) {
                duplicate = true;
                return false;
            }
            return true;
        });
        if (duplicate) {
            alert('Already Added!');
        } else {
            watchList.push({title: dataContent.title, description: dataContent.description, url: dataContent.url});
            localStorage.setItem('watchList', JSON.stringify(watchList));
            alert('Added!');
        }
    }
    
    render() {

        const { data, filterData } = this.state;

        let checkData = {};
        let result = [];

        for (let i = 0; i < data.length - 1; i++) {
            let name = data[i].source.name;
          
            if (!(name in checkData)) {
                checkData[name] = 1;
              result.push(name);
            }
          }


        return (
                <div className="main_content">
                    <div className="main_content_inner">
                        <div className="heading">
                            <h1> News Feed </h1>
                            <div className="filter">
                            {/* <button className="" onClick={() => this.props.history.push('/watchlist')}>View Watchlist</button> */}
                            <div className="head_search">
                                <div className="head_search_cont">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="search"
                                    onChange={this.handleChange}
                                    value={this.state.filterInput}
                                    id="search"
                                    placeholder="Search"
                                    autoComplete="off"
                                />
                                <select
                                    id="source"
                                    value={this.state.selectedOption}
                                    onChange={this.toggleOption}
                                    className="news_source"
                                >
                                    <option value="">Select Source</option>
                                    {result && result.length > 0
                                    ? result.map((element, index) => {
                                        return (
                                        <option key={`source_${index}`} value={element.toLowerCase()}>
                                            {element}
                                        </option>
                                        );
                                    })
                                    : null}
                                </select>
                                </div>
                            </div>
                         </div>
                        </div>
                        
                        {filterData.map((dataContent, index)=> (
                            <div className="uk-grid-large" key={index}>
                            <div className="uk-width-expand@m uk-first-column"> 
                                <div>
                                    <a href={dataContent.url} className="blog-post" target="_blank" rel="noopener">
                                    {dataContent.imageUrl.length > 0 && <div className="blog-post-thumbnail">
                                        <div className="blog-post-thumbnail-inner">
                                            <img src={dataContent.imageUrl} alt={dataContent.title}/>
                                        </div>
                                    </div>}
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
                                    </div>
                                    </a>
                                </div>
                            </div>
                         </div>
                        ))
                        }
                    </div>
            </div>
    
        )
    }
}