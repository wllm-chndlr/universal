import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './kaplow.css';

const Kaplow = ({ children }) => <Container>{children}</Container>;

Kaplow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Kaplow;
