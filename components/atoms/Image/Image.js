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
  maxWidth,
  key
}) => {
  return (
    <article
      key={key}
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
  key: PropTypes.string,
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
  key: '',
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
