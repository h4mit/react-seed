import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// core components
import HeaderLayout from "./partial/Header";
import FooterLayout from "./partial/Footer";
import './master-layout.css';

import masterRoutes from "../routes/master";

import { withLocalize } from "react-localize-redux";
import globalTranslations from "../i18n/locale.json";
import { renderToStaticMarkup } from "react-dom/server";
import LanguageToggle from '../i18n/switcher/lang-switcher';


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
    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "فارسی", code: "fa" }
      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        defaultLanguage: 'fa'
      }
    });
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
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
