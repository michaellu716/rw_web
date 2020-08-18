import React, { Component } from 'react'

export default class UserProfile extends Component {
    render() {
        return (
            <div>
            <a className="opts_account" href="#"> <img src="https://i.pravatar.cc/150?img=36" alt=""/></a>

            <div uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small"
                className="dropdown-notifications rounded">
                <a href="#">
                    <div className="dropdown-user-details">
                        <div className="dropdown-user-avatar">
                            <img src="https://i.pravatar.cc/150?img=36" alt=""/>
                        </div>
                        <div className="dropdown-user-name"> Mike Lu   <span>See your profile</span> </div>
                    </div>
                </a>

                <hr className="m-0"/>
                <ul className="dropdown-user-menu">
                    <li><a href="page-setting.html"> <i className="uil-user"></i> My Account </a> </li>
                    <li><a href="page-setting.html"> <i className="uil-cog"></i> Account Settings</a></li>
                    <li>
                        <a href="#" id="night-mode" className="btn-night-mode">
                            <i className="uil-moon"></i> Night mode
                            <span className="btn-night-mode-switch">
                                <span className="uk-switch-button"></span>
                            </span>
                        </a>
                    </li>
                    <li><a href="form-login.html"> <i className="uil-sign-out-alt"></i>Log Out</a>
                    </li>
                </ul>

                <hr className="m-0"/>
                <ul className="dropdown-user-menu">
                    <li><a href="page-setting.html" className="bg-secondery"> <i className="uil-bolt"></i>
                    <div> Upgrade To Premium <span> Pro features give you complete control </span> </div> </a> 
                    </li>
                </ul>
            </div>
         </div>
        )
    }
}
