var React = require("react");

var Results = React.createClass({

    render: function () {

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    <div className="panel panel-info">
                        <div className="panel-heading">Panel heading without title</div>
                        <div className="panel-body">
                            Panel content
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = Results;