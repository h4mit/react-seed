import intl from "react-intl-universal";
import _ from "lodash";
import http from "axios";
import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import indexRoutes from "./routes";
import { createBrowserHistory } from "history";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
const hist = createBrowserHistory();

const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en"
  },
  {
    name: "فارسی",
    value: "fa"
  }
];

class App extends Component {
  state = { initDone: false };

  constructor(props) {
    super(props);
    this.onSelectLocale = this.onSelectLocale.bind(this);
  }

  componentDidMount() {
    this.loadLocales();
  }

  render() {
    return (
      this.state.initDone &&
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <ToastContainer />
        {this.renderLocaleSelector()}
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        </Router>
      </div>
    );
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = "en";
    }

    http
      .get(window.location.origin + `/i18n/${currentLocale}.json`)
      .then(res => {
        return intl.init({
          currentLocale,
          locales: {
            [currentLocale]: res.data
          }
        });
      })
      .then(() => {
        this.setState({ initDone: true });
      });
  }

  renderLocaleSelector() {
    return (
      <select onChange={this.onSelectLocale} defaultValue="">
        <option value="" disabled>Change Language</option>
        {SUPPOER_LOCALES.map(locale => (
          <option key={locale.value} value={locale.value}>{locale.name}</option>
        ))}
      </select>
    );
  }

  onSelectLocale(e) {
    let lang = e.target.value;
    console.log(lang)
    if (lang === 'fa') {

    }
    window.location.search = `?lang=${lang}`;
  }
}

export default App;
