import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class ContactPage extends Component {
  render() {
    return (
        <p>
          Welcome to Contact Page. <br/>
          <Button variant="contained" color="primary" href="/">
            Home Page
          </Button>
        </p>
    );
  }
}

export default ContactPage;
