import React, { Component } from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
var r = require('react-router');
var helper = require('../components/utils/helpers');
var axios = require("axios");
var Main = require("../components/Main");
var Results = require("../components/Results");
var Saved = require("../components/Saved");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            startYear: '',
            endYear: '',
            articles: [],
            saved: [],
        };
    }
    render() {
        return (
            <Main onButtonClick={helper.articleSearch.bind(this)}>
                <Results articles={this.state.articles} onButtonClick={this.handleSubmit} />
                <Saved savedArticles={this.state.saved}/>
            </Main>
        )
    }

}
module.exports = App;