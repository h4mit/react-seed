import intl from "react-intl-universal";
import http from "axios";
import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import indexRoutes from "./routes";
import { createBrowserHistory } from "history";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import $ from 'jquery';
import Cookies from 'js-cookie';

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
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
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
    currentLocale = Cookies.get('lang');
    if (!currentLocale) {
      Cookies.set('lang', 'fa');
      currentLocale = 'fa';
    }

    $("html").attr("lang", currentLocale);
    console.log(currentLocale)
    if (currentLocale === 'fa') {
      let $url = window.location.origin;
      $("body").attr("dir", "rtl");
      let $head = $("head");
      let $headlinklast = $head.find("style:last");
      let linkElement = "<link rel='stylesheet' type='text/css' href='"+$url+"/assets/css/rtl.css' /><link rel='stylesheet' type='text/css' href='"+$url+"/style-rtl.css' />";
      if ($headlinklast.length) {
        $headlinklast.after(linkElement);
      }
      else {
        $head.append(linkElement);
      }
      let $body = $("body");
      let $bodylinklast = $body.find("script[type='text/javascript']:last");
      let scriptElement = "<script type='text/javascript' href='assets/js/rtl.js' />";
      if ($bodylinklast.length) {
        $bodylinklast.after(scriptElement);
      }
      else {
        $body.append(scriptElement);
      }
      console.log('append');
    } else {
      $("body").attr("dir", "ltr");
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
    Cookies.set('lang', lang);
    this.loadLocales();
  }
}

export default App;
