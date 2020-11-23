import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { DEVICE } from '../assets/const';

const { LG } = DEVICE;

const DropdownContent = styled.ul`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
  padding: 0 1rem;
  min-width: 160px;

  @media ${LG} {
    position: absolute;
    background-color: var(--white);
    box-shadow: 0 0.5rem 1rem 0 var(--menu-shadow);
    border-radius: 0.5rem;
  }
`;

const Dropbtn = styled.span`
  font-weight: 800;
  color: var(--primary-font-color);
  background: none;
  padding: 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: var(--secondary-font-color);
  }
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
  margin: 0 1rem 0 0;

  @media ${LG} {
    &:hover ${DropdownContent} {
      display: block;
    }
  }
`;

const DropdownMenuItem = ({ name, subitems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubItems = () => {
    setIsOpen((origin) => !origin);
  };

  const renderDropdownItems = () => {
    return subitems.map((item) => {
      const { slug, id, url, name: subname } = item;
      return (
        <li key={`${slug}-${id}`}>
          <DropdownItem to={url}>{subname}</DropdownItem>
        </li>
      );
    });
  };

  return (
    <Dropdown onClick={toggleSubItems}>
      <Dropbtn>{name}</Dropbtn>
      <DropdownContent isOpen={isOpen}>{renderDropdownItems()}</DropdownContent>
    </Dropdown>
  );
};

DropdownMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  subitems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownMenuItem;
