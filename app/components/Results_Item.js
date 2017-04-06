import React, { Component } from 'react';
import axios from 'axios';
import helper from './utils/helpers'

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
                        <form onSubmit={this.handleSubmit.bind(this)}>
                                <button className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </li >
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        
        helper.postHistory(this.props.article.headline.main, this.props.article.pub_date, this.props.article.web_url);

        //this.setState({ title: this.props.article.headline.main,
        //     date: this.props.article.pub_date,
        //     url: this.props.article.web_url
        //  });
    }
};

export default ResultItems;