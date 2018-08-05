import React, { Component } from 'react';
const styles = theme => ({
    footer: {
      color: '#177717',
      fontSize: '7px'
    }
  });
class FooterLayout extends Component {
  render() {
    return (
        <div className={styles.footer}>H4mit</div>
    );
  }
}

export default FooterLayout;
