import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import withStyles from '../../../hocs/withStyles';


export const Card = ({
  key,
  children,
  getStyles,
  className,
}) => {
  return(
    <div key={key} className={getStyles(className,'max-w-xs')}>
      {children}
    </div>
  )
}

Card.prototype = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Card.defaultProps = {
  getStyles: () => {},
  className: 'bg-white'
}


export default withStyles(styles)(Card);
