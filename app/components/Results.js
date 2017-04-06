var React = require("react");
import ResultItems from "./Results_Item";

const Results = (props) => {

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                </div>
                <div className="panel-body">
                    <div className="well">
                        {props.articles.map(article => <ResultItems key={article._id}article={article}
                        onClick={this.props.onButtonClick}/>)}
                    </div>
                </div>
            </div>
        );
};

module.exports = Results;