import React, { Component } from 'react';
import Moment from 'react-moment';
// import Modal from 'react-modal';



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

        // Modal.setAppElement('.main_content');

        fetch('https://static.newsfilter.io/landing-page/main-content.json')
        .then((response) => response.json())
        .then((data) => {
            let new_data = this.sort(data);
            this.setState({
                data: new_data,
                filterData: new_data
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
          filterData: value === '' ? this.sort(filterSelect) : this.sort(filterArr)
        });
    };

    sort(data) {
        let source1 = data.filter(val => val.source.id === 'bloomberg');
        let source2 = data.filter(val => val.source.id === 'reuters');
        let source3 = data.filter(val => val.source.id === 'cnbc');
        let new_data = [];
        for (let index = 0; index < Math.max(source1.length, source2.length, source3.length); index++) {
            if (index < source1.length)
            new_data.push(source1[index])
            if (index < source2.length)
            new_data.push(source2[index])
            if (index < source3.length)
            new_data.push(source3[index])
        }
        return new_data;
    }

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
            filterData: this.sort(filterArr)
            });
        });
    };
    
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

         // Todo tomorrow    
        //   var subtitle;
        //     const [modalIsOpen,setIsOpen] = React.useState(false);
        //     function openModal() {
        //         setIsOpen(true);
        //     }
            
        //     function afterOpenModal() {
        //         // references are now sync'd and can be accessed.
        //         subtitle.style.color = '#f00';
        //     }
            
        //     function closeModal(){
        //         setIsOpen(false);
        //     }


        return (
                <div className="main_content">
                    <div className="main_content_inner">
                        <div className="heading">
                            <h1> News Feed </h1>
                            <div className="filter">
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
                                    <a href={dataContent.url} className="blog-post" target="_blank" rel="noopener noreferrer">
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
                                        {/* <a href={dataContent.url} target="_blank" rel="noopener noreferrer" className="button primary circle readMore"> */}
                                            <button className="button primary circle">Read More</button>
                                        {/* </a> */}
                                    </div>
                                    </a>
                                </div>
                            </div>
                         </div>
                        ))
                        }
                    </div>
                    {/* 
                        Todo Tomorrow
                    <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    contentLabel="Example Modal"
                                    >
                            
                                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                                    <button onClick={closeModal}>close</button>
                                    <div>I am a modal</div>
                                    <form>
                                        <input />
                                        <button>tab navigation</button>
                                        <button>stays</button>
                                        <button>inside</button>
                                        <button>the modal</button>
                                    </form>
                            </Modal> */}
            </div>
    
        )
    }
}
