import React, { Component } from 'react';
import UserProfile from '../UserProfile/UserProfile';

export default class Notifications extends Component {
    render() {
        return (
            <div className="head_user">

                <a href="#" className="opts_icon" uk-tooltip="title: Notifications ; pos: bottom ;offset:7">
                    <img src="assets/images/icons/bells.png" alt=""/> <span>3</span>
                </a>

                <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small"
                    className="dropdown-notifications">

                    <div className="dropdown-notifications-content" data-simplebar>
                        <div className="dropdown-notifications-headline">
                            <h4>Notifications </h4>
                            <a href="#">
                                <i className="icon-feather-settings"
                                    uk-tooltip="title: Notifications settings ; pos: left"></i>
                            </a>
                        </div>
                       
                        <ul>
                            <li>
                                <a href="#">
                                    <span className="notification-avatar">
                                        <img src="assets/images/avatars/avatar-2.jpg" alt=""/>
                                    </span>
                                    <span className="notification-icon bg-gradient-primary">
                                        <i className="icon-feather-thumbs-up"></i></span>
                                    <span className="notification-text">
                                        <strong>Gabriel</strong> Liked Your Comment On Video
                                        <span className="text-primary"></span>
                                        <br/> <span className="time-ago"> 9 hours ago </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <UserProfile/>
            </div>
        )
    }
}
