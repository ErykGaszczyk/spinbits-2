import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: var(--white);
  box-shadow: 0 0.5rem 1rem 0 var(--menu-shadow);
  border-radius: 0.5rem;
  z-index: 1;
  padding: 0 1rem;
  min-width: 160px;
`;

const Dropbtn = styled(Link)`
  font-weight: 800;
  color: var(--primary-font-color);
  background: none;
  padding: 0;
  cursor: pointer;
`;

const DropdownItem = styled(Link)`
  color: var(--primary-font-color);
  font-weight: 800;
  padding: 0.75rem 0;
  display: block;
  transition: 0.2s;

  &:hover {
    color: var(--secondary-font-color);
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 1rem 0 0;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

const DropdownMenuItem = ({ name, url, subitems }) => {
  const renderDropdownItems = () => {
    return subitems.map((item) => (
      <DropdownItem key={`${item.slug}-${item.id}`} to={item.url}>
        {item.name}
      </DropdownItem>
    ));
  };

  return (
    <Dropdown>
      <Dropbtn to={url}>{name}</Dropbtn>
      <DropdownContent>{renderDropdownItems()}</DropdownContent>
    </Dropdown>
  );
};

DropdownMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subitems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownMenuItem;
