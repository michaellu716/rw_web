import React, { Component } from 'react'

export default class NewsFeedCategories extends Component {
    
    render() {
        function refreshPage() {
            window.location.reload(false);
        }
        return (
            <div>
                 <div className="uk-flex uk-flex-between">
                            <nav className="responsive-tab style-1 mb-5">
                                <ul>
                                    <li className="uk-active"><a onClick={refreshPage}> Update Live News </a></li>
                                </ul>
                            </nav>
                        </div>
            </div>
        )
    }
}
    