import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '@components/Logo';
import FreeEstimationStepper from '@components/FreeEstimationStepper/FreeEstimationStepper';
import { Button } from '@components/SpinButton';
import { Link } from 'gatsby';
import { Navbar, Collapse, Nav, Container } from '@bootstrap-styled/v4';
import { home, about, services, clients, blog, contact } from '@utils/menu-data';
import { DEVICE, MOBILE_BREAKPOINT } from '@assets/const';
import DropdownMenuItem from '../DropdownMenuItem';

const { sm } = MOBILE_BREAKPOINT;
const { LG } = DEVICE;

const NavShadow = styled.div`
  background-color: var(--white);
  box-shadow: 0 0 1rem 0 var(--shadow);
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

const NavBrandBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const NavItem = styled(Link)`
  font-weight: 700;
  color: var(--primary-font-color);
  transition: 0.2s;
  margin: 0 0 1rem 0;

  &:hover {
    color: var(--secondary-font-color);
  }

  @media ${LG} {
    margin: 0 1.5rem 0 0;
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
    align-items: center;

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

const EstimationButton = styled.button`
  ${Button}
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const callbackFunction = (childData) => {
    setOpenModal(childData);
  };

  return (
    <NavShadow isOpen={isOpen}>
      <CustomContainer>
        <CustomNavbar light toggleable="md">
          <NavBrandBox>
            <Link to="/">
              <Logo />
            </Link>
            <StyledBurger burgerLines={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <div />
              <div />
              <div />
            </StyledBurger>
          </NavBrandBox>
          <CustomCollapse navbar isOpen={isOpen}>
            <Nav navbar>
              <DropdownMenuItem name={home.name} subitems={home.dropdown} />
              <DropdownMenuItem name={about.name} subitems={about.dropdown} />
              <DropdownMenuItem name={services.name} subitems={services.dropdown} />
              <DropdownMenuItem name={clients.name} subitems={clients.dropdown} />
              <NavItem to={blog.url}>{blog.name}</NavItem>
              <DropdownMenuItem name={contact.name} subitems={contact.dropdown} />
              <EstimationButton onClick={() => showModal()}>
                Free project estimation
              </EstimationButton>
              {openModal && (
                <FreeEstimationStepper
                  openFromParent={openModal}
                  parentCallback={callbackFunction}
                />
              )}
            </Nav>
          </CustomCollapse>
        </CustomNavbar>
      </CustomContainer>
    </NavShadow>
  );
};

export default Menu;
