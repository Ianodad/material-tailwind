import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarContainer({ children }) {
  return (
    <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">
      {children}
    </div>
  );
}

NavbarContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
