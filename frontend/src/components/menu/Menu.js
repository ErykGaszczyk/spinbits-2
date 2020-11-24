import React, { useState } from 'react';
import styled from 'styled-components';
import SpinbitsLogo from '@images/logo/logo.webp';
import { Link } from 'gatsby';
import { Navbar, Collapse, Nav, Container } from '@bootstrap-styled/v4';
import { menuItems } from '@utils/menu-data';
import { DEVICE, MOBILE_BREAKPOINT } from '@assets/const';
import DropdownMenuItem from '../DropdownMenuItem';

const { sm } = MOBILE_BREAKPOINT;
const { LG } = DEVICE;

const NavShadow = styled.div`
  background-color: var(--white);
  box-shadow: 0 0 1rem 0 var(--menu-shadow);
  position: fixed;
  width: 100%;
  height: ${(props) => (props.isOpen ? '100%' : 'unset')};
  z-index: 9999;
`;

const CustomContainer = styled(Container)`
  height: 100%;

  @media (max-width: ${sm}) {
    width: unset;
  }
`;

const CustomNavbar = styled(Navbar)`
  height: 100%;
  overflow-y: auto;
  padding: 0.5rem 0 !important;
  @media ${LG} {
    overflow-y: visible;
  }
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
  width: 100%;
  padding: 0 0 1rem 0;

  @media ${LG} {
    padding: 0;
    position: unset;
    display: flex;
    justify-content: flex-end;
  }

  ${Nav} {
    text-align: center;
    padding: 0 0 1rem 0;
    @media ${LG} {
      padding: 0;
      text-align: left;
    }
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 1s;

  &:focus {
    outline: none;
  }
  div {
    z-index: 15;
    width: 2rem;
    height: 0.25rem;
    background: var(--secondary-font-color);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${(props) => (props.burgerLines ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${(props) => (props.burgerLines ? '0' : '1')};
      transform: ${(props) => (props.burgerLines ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${(props) => (props.burgerLines ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${LG} {
    display: none;
  }
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
    <NavShadow isOpen={isOpen}>
      <CustomContainer>
        <CustomNavbar light toggleable="md">
          <NavBrandBox>
            <Link to="/">
              <Logo src={SpinbitsLogo} alt="Spinbits - logo" />
            </Link>
            <StyledBurger burgerLines={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <div />
              <div />
              <div />
            </StyledBurger>
          </NavBrandBox>
          <CustomCollapse navbar isOpen={isOpen}>
            <Nav navbar>{renderMenuItems()}</Nav>
          </CustomCollapse>
        </CustomNavbar>
      </CustomContainer>
    </NavShadow>
  );
};

export default Menu;
