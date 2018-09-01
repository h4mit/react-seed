import React, { Component } from 'react';
import { Button, Input } from 'mdbreact';

class ContactPage extends Component {
  render() {
    return (
      <div>
        Welcome to Contact Page. <br />
        <Button variant="contained" color="primary" href="/">
          Home Page
          </Button>
        <form>
          <h3>Contact</h3>
          <div>
            <Input label="Example label" icon="envelope" />
          </div>
          <div>
            <Input type="textarea" label="Icon Prefix" icon="pencil" />
          </div>
          <div>
            <Button color="primary">Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactPage;
