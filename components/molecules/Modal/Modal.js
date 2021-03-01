import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { options } from './constants';
import withStyles from "../../../hocs/withStyles";
import styles from './Modal.module.css';

import Paragraph from 'atoms/Paragraph';
import Icon from '@material-ui/core/Icon';


export const Modal = ({
  getStyles,
  showModal,
  setShowModal,
  children,
  title,
  showTitle,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  
}) => {
  return(
    <div className={getStyles('wrapper', ['positionY', 'positionX'])}>
      <main className={getStyles('modal', `${!showModal ? 'hidden': ''}`)} style={{maxHeight, maxWidth, minWidth, minHeight}}>
        {
          showTitle ? (
            <div className={getStyles('modal-title')}>
              <Paragraph size={'md'} weight={'bold'}>{title}</Paragraph>
              <Icon className="cursor-pointer" onClick={() => setShowModal(!showModal)}>clear</Icon>
            </div>
          ) : <></>
        }
        <div className={getStyles('modal-content')}>
          {children}
        </div>
      </main>
    </div>
  )
}

Modal.propTypes = {
  getStyles: PropTypes.func,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  positionY: PropTypes.oneOf(options.positionY),
  positionX: PropTypes.oneOf(options.positionX),
}


Modal.defaultProps = {
  getStyles: () => {},
  title: 'Title default',
  showTitle: true,
  openModal: false,
  maxWidth: '21.688rem',
  minWidth: '21.688rem',
  maxHeight: '21.688rem',
  minHeight: '21.688rem',
  positionY: 'top',
  positionX: 'right',
}
export default withStyles(styles)(Modal);