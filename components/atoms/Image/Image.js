import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.css';
import withStyles from '../../../hocs/withStyles';

export const Image = ({
  getStyles,
  className,
  isBorder,
  src,
  height,
  width,
  isRounded,
  maxHeight,
  maxWidth
}) => {
  return (
    <article
      className={getStyles(
        className, 
        ['height'],
        {
          'is-rounded': isRounded,
          'is-border': isBorder,
        }
      )}
      style={
        {
          maxWidth,
          maxHeight,
          height,
          width,
        }
      }
    >
      <img src={src} />
    </article>
  );
};

Image.propTypes = {
  getStyles: PropTypes.func.isRequired,
  className: PropTypes.string,
  src: PropTypes.string,
  isRounded: PropTypes.bool,
  isBorder: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string
};

Image.defaultProps = {
  src: '',
  isRounded: false,
  isBorder: false,
  height: 'auto',
  width: 'auto',
  getStyles: () => {},
  maxHeight: '261px',
  maxWidth: '349px',
};

export default withStyles(styles)(Image);
