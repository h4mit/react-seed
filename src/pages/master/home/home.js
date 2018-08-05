import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class HomePage extends Component {
  render() {
    return (
        <p>
          Welcome to Home Page. <br/>
          <Button variant="contained" color="primary" href="/home/contact">
            Contact
          </Button> &nbsp;
          <Button variant="contained" color="primary" href="/dashboard">
            Dashboard
          </Button>
        </p>
    );
  }
}

export default HomePage;
