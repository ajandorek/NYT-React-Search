import React, { Component } from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
var r = require('react-router');
var apiKey = "e696e8df7f4c4a83b7091881b9a12103"
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
            articles: []
        };
    }
    articleSearch(term, startYear, endYear) {
        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${term}&begin_date=${startYear}0000&end_date=${endYear}0000`
        return axios.get(url).then((res) => {
            var result = res.response;
            console.log(this);
            console.log(result);
            console.log(`Title: ${result.docs[0].headline.main}`);
            console.log(`Date: ${result.docs[0].pub_date}`);
            console.log(`URL: ${result.docs[0].web_url}`);
            this.setState({ articles: result.docs })
        }, function (err) {
            throw err;
        });
    }
    render() {
        return (
            <Main onButtonClick={this.articleSearch.bind(this)}>
                <Results articles={this.state.articles} onButtonClick={this.handleSubmit}/>
                <Saved />
            </Main>
        )
    }

}
module.exports = App;