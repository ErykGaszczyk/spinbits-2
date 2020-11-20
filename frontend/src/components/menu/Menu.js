import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SpinbitsLogo from '@static/images/logo/logo.webp';
import { Link } from 'gatsby';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import DropdownMenuItem from '../DropdownMenuItem';
import { menuItems } from '../../utils/menu-data';

const NavShadow = styled.div`
  background-color: var(--white);
  box-shadow: 0 0 1rem 0 #e5e5e5; // TODO: color
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const NavContainer = styled.div`
  padding: 1rem 0;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const NavItem = styled(Link)`
  color: var(--primary-font-color);
  font-weight: 800;
  &:not(:last-child) {
    margin: 0 1rem 0 0;
  }
`;

const Menu = () => {
  const renderMenuItems = () => {
    return menuItems.map((item) => {
      const { id, slug, name, url, dropdown } = item;
      return dropdown && dropdown !== 'undefined' ? (
        <DropdownMenuItem key={`${slug}-${id}`} url={url} name={name} subitems={dropdown} />
      ) : (
        <NavItem key={`${slug}-${id}`} to={url}>
          {name}
        </NavItem>
      );
    });
  };

  return (
    <NavShadow>
      <Container>
        <Row>
          <Col>
            <NavContainer>
              <NavWrapper>
                <Link to="/">
                  <Logo src={SpinbitsLogo} alt="Spinbits - logo" />
                </Link>
                <Navigation>
                  <div>{renderMenuItems()}</div>
                </Navigation>
              </NavWrapper>
            </NavContainer>
          </Col>
        </Row>
      </Container>
    </NavShadow>
  );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
