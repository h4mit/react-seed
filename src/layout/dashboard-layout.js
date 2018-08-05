import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// core components
import NavBarLayout from "./partial/NavBar";
import FooterLayout from "./partial/Footer";
import './dashboard-layout.css';

import dashboardRoutes from "../routes/dashboard";


const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} exact={true} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <div className="App">
        <div ref="mainPanel">
          <NavBarLayout />
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

export default Dashboard;