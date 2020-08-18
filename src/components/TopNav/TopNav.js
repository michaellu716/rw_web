import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications';

export default class TopNav extends Component {
    render() {
        return (
            <div id="main_header">
                <header>
                    <div className="header-innr">
                        <div className="header-btn-traiger" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible">
                            <span></span></div>

                        <div id="logo">
                            <a href="homepage.html"> <img src="assets/images/logo.png" alt=""/></a>
                            <a href="homepage.html"> <img src="assets/images/logo-light.png" className="logo-inverse"
                                    alt=""/></a>
                        </div>
                        <div className="head_search">
                            <div className="head_search_cont">
                                <input value="" type="text" className="form-control"
                                    placeholder="Search for Stocks , Latest News and more.." autocomplete="off"/>
                                <i className="s_icon uil-search-alt"></i>
                            </div>

                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                                className="dropdown-search">
                                <ul className="dropdown-search-list">
                                    <li cclassNamelass="list-title"> Recent Searches </li>
                                    <li> <a href="#"> <img src="assets/images/group/group-2.jpg" alt=""/> Apple</a> </li>
                                    <li> <a href="#"> <img src="assets/images/group/group-4.jpg" alt=""/> Microsoft</a> </li>
                                    <li> <a href="#"> <img src="assets/images/group/group-5.jpg" alt=""/> Teslsa </a> </li>
                                    <li className="menu-divider"></li>
                                    <li className="list-footer"> <a href="your-history.html"> Searches History </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Notifications/>
                    </div>
                </header>
             </div>
        )
    }
}
