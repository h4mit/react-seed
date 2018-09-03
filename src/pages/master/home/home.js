import React, { Component } from 'react';
import { toast } from 'mdbreact';
import intl from 'react-intl-universal';
import Colorrose from './Colorrose';


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      count: 0
    }
  }

  componentDidMount() {
    toast.info('Welcome to React Seed ;) ', {
      autoClose: 3000
    });
  }



  render() {
    return (
      <div>
        <hr />
         <h1>
         {intl.get('HOME.wlc')}
          </h1>
         <br />
         <Colorrose/>
        <hr />
      </div>
    );
  }
}

export default HomePage;
