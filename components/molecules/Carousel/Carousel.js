import React from 'react';
import PropTypes from 'prop-types';

import ReactMultiCarousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Carousel = ({ children }) => {
  return (
    <>
      <ReactMultiCarousel
        responsive={responsive}
        arrows={false}
        showDots
        autoPlay
        infinite
        swipeable
      >
        {children}
      </ReactMultiCarousel>
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

Carousel.defaultProps = {};

export default Carousel;
