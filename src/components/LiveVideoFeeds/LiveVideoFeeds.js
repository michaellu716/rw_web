import React, { Component } from 'react';

export default class LiveVideoFeeds extends Component {
    render() {
        return (
            <div className="uk-width-1-3@s">
            <div className="uk-card-default rounded mb-4">
                    <ul className="uk-child-width-expand uk-tab" uk-switcher="animation: uk-animation-fade">
                        <li><a href="#">Video Live News</a></li>
                    </ul>

                <ul className="uk-switcher">
                    <li>
                        <div className="py-3 px-4">
                            <div className="uk-grid-small" uk-grid>
                                <div className="uk-width-expand">
                                    <p> 1Overview of SQL Commands and PDO </p>
                                </div>
                                <div className="uk-width-1-3">
                                    <img src="https://media.giphy.com/media/3orieUs03VUeeBa7Wo/giphy.gif" alt="" className="rounded-sm"/>
                                </div>
                            </div>
                            <div className="uk-grid-small" uk-grid>
                                <div className="uk-width-expand">
                                    <p> Writing a Simple MVC App in Plain </p>
                                </div>
                                <div className="uk-width-1-3">
                                    <img src="https://media.giphy.com/media/3orieVe5VYqTdT16qk/giphy.gif" alt="" className="rounded-sm"/>
                                </div>
                            </div>
                            <div className="uk-grid-small" uk-grid>
                                <div className="uk-width-expand">
                                    <p> Writing a Simple MVC App in Plain </p>
                                </div>
                                <div className="uk-width-1-3">
                                    <img src="https://media.giphy.com/media/10G6DAT8Z4XsKA/giphy.gif" alt="" className="rounded-sm"/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
