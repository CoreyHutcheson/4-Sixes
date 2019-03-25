import React, { useState } from "react";
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

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link to="/" onClick={closeNavbar}>
          <img
            src={logo}
            alt="Four Sixes Logo"
            className="navbar-brand__logo"
          />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CustomNavItem title="Events" handleClick={closeNavbar} />
            <CustomNavItem title="Products" handleClick={closeNavbar} />
            <CustomNavItem title="History" handleClick={closeNavbar} />
            <CustomNavItem title="About" handleClick={closeNavbar} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

CustomNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomNavbar;
