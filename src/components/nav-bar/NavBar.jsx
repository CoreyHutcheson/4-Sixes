import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import logo from "src/assets/images/logo/four-sixes-logo-with-text[250x100].svg";
import "./style.scss";

const CustomNavItem = ({ title, handleClick }) => {
  const path = `/${title.toLowerCase()}`;
  title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  return (
    <NavItem>
      <Link to={path} activeClassName="active" onClick={handleClick}>
        {title}
      </Link>
    </NavItem>
  );
};

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeNavbar() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    console.log(this.closeNavbar);

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/" onClick={this.closeNavbar}>
            <img
              src={logo}
              alt="Four Sixes Logo"
              className="navbar-brand__logo"
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <CustomNavItem title="Events" handleClick={this.closeNavBar} />
              <CustomNavItem title="Products" handleClick={this.closeNavBar} />
              <CustomNavItem title="History" handleClick={this.closeNavBar} />
              <CustomNavItem title="About" handleClick={this.closeNavBar} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

CustomNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomNavbar;
