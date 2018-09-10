import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {FooterLayout, HeaderLayout} from "./partial";
import './master-layout.css';
import masterRoutes from "../routes/master";
import config from 'react-global-configuration';


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
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
    if(config.get('config'))
    window.document.getElementsByTagName("title")[0].innerHTML = config.get('config')['title'];
    console.log(config.get('user'));
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
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          <div>{switchRoutes}</div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

export default Master;
