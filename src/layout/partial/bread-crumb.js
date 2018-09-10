import React, { Component } from 'react';
// import intl from 'react-intl-universal';

export class BreadCrumb extends Component {
    render() {
        let pageName = this.props.pageName;
        return (
            <span className="fa fa-user-circle"> {pageName}</span>
            );
        }
    }
