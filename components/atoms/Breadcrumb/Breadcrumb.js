import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from 'nextjs-breadcrumbs';

import withStyles from '../../../hocs/withStyles';

import styles from './Breadcrumb.module.css';

export const Breadcrumb = ({ getStyles, className }) => {
  const breadcrumbs = Breadcrumbs();
  const classes = getStyles(className, 'breadcrumb');

  return <div className={classes}>{breadcrumbs}</div>;
};

Breadcrumb.propTypes = {
  getStyles: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  getStyles: () => {},
};

export default withStyles(styles)(Breadcrumb);
