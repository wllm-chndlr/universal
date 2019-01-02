import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Link } from './item.css';

const Item = ({ title, copy, image, link }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <Link>{link}</Link>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
};

export default Item;
