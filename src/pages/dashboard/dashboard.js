import React, { Component } from 'react';
import { BreadCrumb } from "../../layout/partial";

class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Dashboard'
    };
  }

  render() {

    return (
      <div>
        <BreadCrumb pageName={this.state.pageName} />
      </div>
    );
  }
}

export default (DashboardPage);
