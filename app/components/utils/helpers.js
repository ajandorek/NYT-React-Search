var axios = require("axios");
var apiKey = "e696e8df7f4c4a83b7091881b9a12103";

var helper = {articleSearch(term, startYear, endYear) {
        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${term}&begin_date=${startYear}0000&end_date=${endYear}0000`
        return axios.get(url).then((res) => {
            var result = res.data.response;
            console.log(res);
            console.log(this);
            console.log(result);
            console.log(`Title: ${result.docs[0].headline.main}`);
            console.log(`Date: ${result.docs[0].pub_date}`);
            console.log(`URL: ${result.docs[0].web_url}`);
            this.setState({ articles: result.docs })
        }, function (err) {
            throw err;
        });
    },
    getHistory: function () {
        return axios.get("/api/saved");
    },

    // This function posts new searches to our database.
    postHistory: function (title, date, url) {
        event.preventDefault();
        return axios.post("/api/saved", { 
            title : title,
            date: date,
            url: url });
    }
};

// We export the API helper
module.exports = helper;
