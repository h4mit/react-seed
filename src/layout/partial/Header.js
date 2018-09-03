import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavbarNav, NavbarToggler, Collapse } from 'mdbreact';
import intl from 'react-intl-universal';

class HeaderLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Navbar color="indigo" dark expand="md" scrolling>
        <NavbarBrand href="/">
          <strong>{intl.get('APP.name')}</strong>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="/home">{intl.get('MENU.home')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home/news">{intl.get('MENU.news')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home/map">{intl.get('MENU.map')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home/contact">{intl.get('MENU.contact')}</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>{intl.get('MENU.more')}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/dashboard">{intl.get('MENU.dashboard')}</DropdownItem>
                  <DropdownItem href="#">Another Action</DropdownItem>
                  <DropdownItem href="#">Something else here</DropdownItem>
                  <DropdownItem href="#">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <form className="form-inline md-form mt-0">
                <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder={intl.get('MENU.search')} aria-label="Search" />
              </form>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default HeaderLayout;
