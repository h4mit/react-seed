import React, { Component } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          First Style
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
