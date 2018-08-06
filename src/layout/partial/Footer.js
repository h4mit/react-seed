import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';
const styles = theme => ({
  footer: {
    color: '#177717',
    fontSize: '7px'
  }
});
class FooterLayout extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <Translate>
          {({ translate }) => (
            <p>{translate("APP.footer", null, { renderInnerHtml: true })}</p>
          )}
        </Translate></div>
    );
  }
}

export default withLocalize(FooterLayout);
