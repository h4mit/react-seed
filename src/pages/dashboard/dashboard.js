import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class DashboardPage extends Component {
  render() {
    return (
        <p>
          Welcome to Dashboard. <br/>
          <Button variant="contained" color="primary" href="/list">
            List Page
          </Button>
        </p>
    );
  }
}

export default DashboardPage;
