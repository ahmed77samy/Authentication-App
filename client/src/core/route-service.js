import React from 'react';
import ReactDOM from 'react-dom';
import Middleware from "./middleware"
import {Router,Switch,Route} from "react-router-dom";

import {createBrowserHistory} from "history"

let routeList = []
let history = createBrowserHistory()
/**
 * add routing to route list
 * @param {String} path 
 * @param {React.Component} component 
 * @param {Array} middleware
 */
function addRouting (path, component, middleware = null) {
    routeList.push({path, component, middleware})
}

/**
 * handle routes and return component routing
 * @returns {React.Component}
 */
function Routes () {
    let routes = routeList.map((route, index) => {
        return(
            <Route path={route.path} key={index} exact>
                <Middleware route={route} history={history} />
            </Route>
        )
    })
    return (
        <Router history={history}>
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