import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SpinbitsLogo from '@static/images/logo/logo.webp';
import { Link } from 'gatsby';
import { Navbar, NavbarToggler, Collapse, Nav, Container } from '@bootstrap-styled/v4';
import DropdownMenuItem from '../DropdownMenuItem';
import { menuItems } from '../../utils/menu-data';

import { DEVICE } from '../../assets/const';

const { LG } = DEVICE;

const NavShadow = styled.div`
  background-color: var(--white);
  box-shadow: 0 0 1rem 0 var(--menu-shadow);
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const Logo = styled.img`
  width: 100%;
`;

const NavBrandBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const NavItem = styled(Link)`
  color: var(--primary-font-color);
  font-weight: 800;
  transition: 0.2s;
  margin: 0 0 1rem 0;

  &:hover {
    color: var(--secondary-font-color);
  }

  @media ${LG} {
    margin: 0 1rem 0 0;
  }
`;

const CustomCollapse = styled(Collapse)`
  @media ${LG} {
    display: flex;
    justify-content: flex-end;
  }

  ${Nav} {
    text-align: center;
    @media ${LG} {
      text-align: left;
    }
  }
`;

const CustomNavbar = styled(Navbar)`
  overflow-y: scroll;
  padding-left: 0;
  padding-right: 0;
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const renderMenuItems = () => {
    return menuItems.map((item) => {
      const { id, slug, name, url, dropdown } = item;
      return dropdown && dropdown !== 'undefined' ? (
        <DropdownMenuItem key={`${slug}-${id}`} name={name} subitems={dropdown} />
      ) : (
        <NavItem key={`${slug}-${id}`} to={url}>
          {name}
        </NavItem>
      );
    });
  };

  return (
    <NavShadow>
      <CustomNavbar light toggleable="md">
        <NavBrandBox>
          <Link to="/#free-estimation">
            <Logo src={SpinbitsLogo} alt="Spinbits - logo" />
          </Link>

          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        </NavBrandBox>
        <CustomCollapse navbar isOpen={isOpen}>
          <Nav navbar>{renderMenuItems()}</Nav>
        </CustomCollapse>
      </CustomNavbar>
    </NavShadow>
  );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
