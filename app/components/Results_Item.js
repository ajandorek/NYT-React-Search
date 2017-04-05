import React, { Component } from 'react';

class ResultItems extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-body">
                        <div className="media-heading">{this.props.article.headline.main}</div>
                        <div className="media-heading">{this.props.article.pub_date}</div>
                        <div className="media-heading">{this.props.article.web_url}</div>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </li>
        )
    }
};

export default ResultItems;