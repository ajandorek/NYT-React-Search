var React = require("react");

var Search = React.createClass({

    render: function () {

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <label placeholder="label goes here" />
                </div>
            </div>
        );
    }
});

module.exports = Search;