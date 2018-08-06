import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderLayout from "./partial/Header";
import FooterLayout from "./partial/Footer";
import './master-layout.css';
import masterRoutes from "../routes/master";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../i18n/locale.json";
import { renderToStaticMarkup } from "react-dom/server";
import LanguageToggle from '../i18n/switcher/lang-switcher';
import config from 'react-global-configuration';

const LANG_KEY = 'lang';


const switchRoutes = (
  <Switch>
    {masterRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} exact={true} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Master extends React.Component {
  constructor(props) {
    super(props);
    const lang = (window.localStorage.getItem(LANG_KEY)) ? window.localStorage.getItem(LANG_KEY) : 'fa';
    this.props.initialize({
      languages: [
        { name: "English", code: "en", dir: "ltr" },
        { name: "فارسی", code: "fa", dir: "rtl" }
      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        defaultLanguage: lang
      }
    });
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
    window.document.getElementsByTagName("title")[0].innerHTML = config.get('title');
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="App">
        <div ref="mainPanel">
          <HeaderLayout
            routes={masterRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <LanguageToggle />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          <div>{switchRoutes}</div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withLocalize(Master);
