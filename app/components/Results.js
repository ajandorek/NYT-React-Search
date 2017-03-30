var React = require("react");

var Results = React.createClass({

    render: function () {

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                </div>
                <div className="panel-body">
                    <div className="well">
                        <p>Test</p>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Results;