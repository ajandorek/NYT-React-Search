import React, { Component } from 'react';
import axios from axios;

class ResultItems extends Component {
    constructor(props) {
        super(props);

    }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     var self = this;
    //     return axios.post('/api/saved', {
    //         title: self.refs.title,
    //         date: self.refs.date,
    //         url: self.refs.url
    //     }
    //     )
    //         .then(function (response) {
    //             return response.json()
    //         }).then(function (body) {
    //             console.log(body);
    //         });
    // }
    render() {
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-body">
                        <div className="media-heading">{this.props.article.headline.main}</div>
                        <div className="media-heading">{this.props.article.pub_date}</div>
                        <div className="media-heading">{this.props.article.web_url}</div>
                        <form>
                            <input type="hidden" refs="title" val={this.props.article.headline.main} />
                            <input type="hidden" refs="date" val={this.props.article.headline.pub_date} />
                            <input type="hidden" refs="url" val={this.props.article.headline.web_url} />
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>
            </li>
        )
    }
};

export default ResultItems;