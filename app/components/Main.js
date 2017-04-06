import React, { Component } from 'react';

class Main extends Component {
// var Main = React.createClass({
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            startYear: '',
            endYear: ''
        }
    }
    
    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1>NYT Article Search!</h1>
                        <p><em>Search for and annotate Articles of interest</em></p>
                    </div>
                </div>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <div className="search-bar input-group">
                        <label>Topic</label>
                        <br />
                        <input
                            className="form-control"
                            id="term"
                            value={this.state.term}
                            onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="search-bar input-group">
                        <label>Start Year</label>
                        <br />
                        <input
                            className="form-control"
                            id="startYear"
                            value={this.state.startYear}
                            onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="search-bar input-group">
                        <label>End Year</label>
                        <br />
                        <input
                            className="form-control"
                            id="endYear"
                            value={this.state.endYear}
                            onChange={this.handleChange.bind(this)} />
                    </div>
                    <button 
                        className="btn btn-primary"
                        onClick={this.buttonClick.bind(this)}>
                            Search
                        </button>
                </div>
            </div>
            <div>
                    {this.props.children}
            </div>
        </div>
        );
    }
    buttonClick(term, startYear, endYear) {
        this.props.onButtonClick(this.state.term, this.state.startYear, this.state.endYear)
        console.log(this.state.term);
    }
};

module.exports = Main;