import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.css';
import withStyles from '../../../hocs/withStyles';

export const Image = ({
  getStyles,
  className,
  src,
  isRounded
}) => {
  return (
    <article
      className={getStyles(
        className, 
        ['height'],
        {
          'is-rounded': isRounded
        }
      )}
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
  height: PropTypes.string
};

Image.defaultProps = {
  src: '',
  isRounded: false,
  height: 'auto',
  getStyles: () => {},
};

export default withStyles(styles)(Image);
