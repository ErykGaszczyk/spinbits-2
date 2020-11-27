import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { DEVICE } from '@assets/const';

const { LG } = DEVICE;

const DropdownContent = styled.ul`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
  padding: 0 1rem;
  min-width: 160px;

  @media ${LG} {
    position: absolute;
    background-color: var(--white);
    box-shadow: 0 0.5rem 1rem 0 var(--shadow);
    border-radius: 0.5rem;
  }
`;

const Dropdown = styled.li`
  font-weight: 700;
  color: var(--primary-font-color);
  &:not(:last-child) {
    margin: 0 0 1rem 0;
  }

  &:hover {
    color: var(--secondary-font-color);
    cursor: pointer;
  }

  @media ${LG} {
    position: relative;
    &:not(:last-child) {
      margin: 0 1rem 0 0;
    }
    &:hover ${DropdownContent} {
      display: block;
    }
  }
`;

const DropdownItem = styled.li`
  a {
    color: var(--primary-font-color);
    padding: 0.75rem 0;
    display: block;
    transition: 0.2s;
    cursor: pointer;
    transition: 0.2s;
    color: var(--light-font-color);

    &:hover {
      color: var(--primary-font-color);
    }

    @media ${LG} {
      color: var(--primary-font-color);
      &:hover {
        color: var(--secondary-font-color);
      }
    }
  }

  &:hover {
    color: var(--secondary-font-color);
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
        <DropdownItem key={`${slug}-${id}`}>
          <Link to={url}>{subname}</Link>
        </DropdownItem>
      );
    });
  };

  return (
    <Dropdown onClick={toggleSubItems}>
      {name}
      <DropdownContent isOpen={isOpen}>{renderDropdownItems()}</DropdownContent>
    </Dropdown>
  );
};

DropdownMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  subitems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownMenuItem;
