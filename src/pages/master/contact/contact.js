import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
// import { isEmail } from 'validator';

// const required = (value, props) => {
//   if (!value || (props.isCheckable && !props.checked)) {
//     return <span className="form-error is-visible">Required</span>;
//   }
// };

// const email = (value) => {
//   if (!isEmail(value)) {
//     return <span className="form-error is-visible">${value} is not a valid email.</span>;
//   }
// };

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
            <TextField
              required
              id="required"
              label="Email"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="full-width"
              label="Message"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Message"
              helperText="Full width!"
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            <Button variant="contained" color="primary">Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactPage;
