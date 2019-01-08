import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, link }) => (
  <figure>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </a>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      {/* <Title>{link}</Title> */}
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
};

export default Item;
