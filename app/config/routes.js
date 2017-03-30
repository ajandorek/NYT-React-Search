var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;

var Main = require("../components/Main");
var Results = require("../components/Results");
var Saved = require("../components/Saved");
var Search = require("../components/Search");

module.exports = (
    <Route component={Main}>
        <Route component={Search} />
        <Route component={Results} />
        <Route component={Saved} />
    </Route>
);