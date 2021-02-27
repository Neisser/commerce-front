import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import withStyles from '../../../hocs/withStyles';


export const Card = ({
  children,
  getStyles,
  className,
}) => {
  return(
    <div className={getStyles(className,'max-w-xs')}>
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
  getStyles: () => {}
}


export default withStyles(styles)(Card);
