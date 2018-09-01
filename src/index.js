import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./assets/css/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import indexRoutes from "./routes";
import { LocalizeProvider } from "react-localize-redux";
import config from 'react-global-configuration';
import configuration from './config';
const hist = createBrowserHistory();

 
config.set(configuration);

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
