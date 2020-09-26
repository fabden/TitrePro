import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = ({ categories }) => (
  <header className="menu">
    <nav>
      {
        categories.map((category) => (
          <NavLink
            exact
            key={category.label}
            to={category.route} // -> equals "href"
            className="menu__link"
          >
            {category.label}
          </NavLink>
        ))
      }
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;
