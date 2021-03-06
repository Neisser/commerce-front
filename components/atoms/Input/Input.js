import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';
import { options } from './constants';
import withStyles from 'hocs/withStyles';

export const Input = ({
  getStyles,
  type,
  value,
  isInline,
  onChange,
  placeholder,
  className,
}) => (
  <input
    className={getStyles(className, 'input', {
      'is-inline': isInline,
    })}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  ></input>
);

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isInline: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  isInline: false,
  onChange: () => {},
  getStyles: () => {},
};

export default withStyles(styles)(Input);
