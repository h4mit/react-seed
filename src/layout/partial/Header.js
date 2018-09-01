import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavbarNav, NavbarToggler, Collapse } from 'mdbreact';

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
          <strong>React Seed</strong>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Action</DropdownItem>
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
                <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search" />
              </form>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default HeaderLayout;
