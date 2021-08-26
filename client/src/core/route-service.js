import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

let routeList = []

/**
 * add routing to route list
 * @param {String} path 
 * @param {React.Component} component 
 */
function addRouting (path, component) {
    routeList.push({path, component})
}

/**
 * handle routes and return component routing
 * @returns {React.Component}
 */
function Routes () {
    let routes = routeList.map((route, index) => {
        return(
            <Route path={route.path} component={route.component} key={index} exact />
        )
    })
    return (
        <Router>
            <Switch>
                {routes}
            </Switch>
        </Router>
    )
}

/**
 * render routes to root div
 */
function render() {
    ReactDOM.render(<Routes />,document.getElementById('root'));
}


let RouteService = {
    render,
    provider: {
        name: "route",
        call: addRouting
    }
}

export default RouteService