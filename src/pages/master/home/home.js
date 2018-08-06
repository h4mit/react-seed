import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import homeTranslations from "./i18n/home.json";
import { withLocalize, Translate } from 'react-localize-redux';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.props.addTranslation(homeTranslations);
  }

  render() {
    return (
      <div>
        <Translate>
          {({ translate }) => <h1>{translate("HOME.today", { date: Date.now() })}</h1>}
        </Translate>
        <hr />
        <Translate>
          {({ translate }) => <h1>{translate("HOME.wlc")}</h1>}
        </Translate> <br />
        <Button variant="contained" color="primary" href="/home/contact">
          Contact
          </Button> &nbsp;
          <Button variant="contained" color="primary" href="/dashboard">
          Dashboard
          </Button>
      </div>
    );
  }
}

export default withLocalize(HomePage);
