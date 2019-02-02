import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <br />
      </li>
      <li>
        <Link to="/projects">Projects</Link>
        <br />
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {/* <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li> */}
      {/* <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/wllm-chndlr">GitHub</a>
      </li> */}
    </ul>
  </Container>
);

export default Nav;
