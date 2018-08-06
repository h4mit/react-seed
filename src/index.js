import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

import "./assets/css/style.css";

import indexRoutes from "./routes/index.js";
import { LocalizeProvider } from "react-localize-redux";

const hist = createBrowserHistory();

ReactDOM.render(
    <LocalizeProvider>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    if (prop.redirect)
                        return <Redirect from={prop.path} to={prop.to} key={key} />;
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
        </LocalizeProvider>,
    document.getElementById("root")
);
registerServiceWorker();
