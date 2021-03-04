import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';
import withStyles from '../../../hocs/withStyles';

import Icon from '@material-ui/core/Icon';
import Paragraph from 'atoms/Paragraph';
export const Footer = ({ getStyles }) => {
  return (
    <footer className={getStyles('footer', 'mt-10')}>
      <div className={getStyles('div', 'px-20')}>
        {/* Logo */}
        <div className={getStyles('logo')}>
          <Paragraph className={'text-white'} size={'2xl'} weigth={'bold'}>
            Logo
          </Paragraph>
        </div>

        <div className={getStyles('text', 'mt-4')}>
          <Paragraph className={'text-white'} size={'lg'}>
            clusthers@gmail.com
          </Paragraph>
        </div>

        <div className={getStyles('icon')}>
          <Icon>fiber_manual_record</Icon>
          <Icon>fiber_manual_record</Icon>
          <Icon>fiber_manual_record</Icon>
        </div>

        {/* Contenido */}
        <div className={getStyles('text', 'mt-4')}>
          <Paragraph className={'text-white'} size={'lg'}>
            FAQ
          </Paragraph>
          <Paragraph className={'text-white'} size={'lg'}>
            Shipping information
          </Paragraph>
          <Paragraph className={'text-white'} size={'lg'}>
            Privacy policy
          </Paragraph>
          <Paragraph className={'text-white'} size={'lg'}>
            Terms and conditions
          </Paragraph>
        </div>
        
      </div>
    </footer>
  );
};
Footer.prototype = {
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Footer);
