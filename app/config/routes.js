import React, { Component } from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
var r = require('react-router');

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
    componentDidMount() {
        helpers.getHistory().then(function (response) {
            console.log(response);
            if (response !== this.state.history) {
                console.log("History", response.data);
                this.setState({ history: response.data });
            }
        }.bind(this));
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
    componentDidUpdate(){
        helpers.postHistory(this.state.term, this.state.startYear, this.state.endYear).then(function(){
            console.log("updated!");
        })
    }
    render() {
        return (
            <Main onButtonClick={this.articleSearch.bind(this)}>
                <Results articles={this.state.articles} onButtonClick={this.handleSubmit} />
                <Saved />
            </Main>
        )
    }

}
module.exports = App;