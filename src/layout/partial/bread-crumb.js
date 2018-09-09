import React, { Component } from 'react';
// import intl from 'react-intl-universal';

export class BreadCrumb extends Component {
    render() {
        let pageName = this.props.pageName;
        return (
            <b>{pageName}</b>
        );
    }
}
