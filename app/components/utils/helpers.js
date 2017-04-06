var axios = require("axios");

var apiKey = "e696e8df7f4c4a83b7091881b9a12103";

var helper = {
    getHistory: function () {
        return axios.get("/api/saved");
    },

    // This function posts new searches to our database.
    postHistory: function (title, date, url) {
        return axios.post("/api/saved", { 
            title : title,
            date: date,
            url: url });
    }
};

// We export the API helper
module.exports = helper;
