import React from 'react';
import helper from './utils/helpers'

var Saved = React.createClass({
    componentDidMount: function () {
        helper.getHistory().then(function (response) {
            console.log(response);
            if (response !== this.props.savedArticles) {
                console.log("Articles", response.data);
                this.setState({ saved: response.data });
                console.log(this.state.saved)
            }
        }.bind(this));
    },
    render: function () {

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    {this.state && this.state.saved.map(function(saved, i){
                    return(
                    <div className="panel panel-info" key={i}>
                        <div className="panel-heading">{saved.title}</div>
                        <div className="panel-body">
                            <p>Date: {saved.date}</p>
                            <p>URL: {saved.url}</p>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Saved;