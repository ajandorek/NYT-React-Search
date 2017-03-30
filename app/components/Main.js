var React = require("react");

var Main = React.createClass({

    render: function(){

        return (
            <div className="container">

                <div className="row">
                    
                    <div className="jumbotron">
                        <h1>NYT Article Search!</h1>
                        <p><em>Search for and annotate Articles of interest</em></p>
                    </div>
                    <div className="container">

                        {/* Added this.props.children to dump all of the child components into place */}
                        {this.props.children}

                    </div>
                </div>        
            </div>
        );
    }
});

module.exports = Main;