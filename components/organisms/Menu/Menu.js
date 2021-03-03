import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import { slide as MenuComponent } from 'react-burger-menu';

import withStyles from '../../../hocs/withStyles';
import styles from './Menu.module.css';

import { routes } from 'helpers/constants';

const stylesMenuComponent = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    display: 'none'
  },
  bmBurgerBars: {
    display: 'none'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'black',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',

  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export const Menu = ({
  getStyles,
  showMenu,
  setShowMenu
}) => {

  return (
    <MenuComponent onClose={() => setShowMenu(!showMenu)} styles={stylesMenuComponent} isOpen={showMenu}>
      {
        routes.map((r) => (
          <Link href={r.route}>
            <a className={getStyles("list-option")}>{r.label}</a>
          </Link>
        ))
      }
    </MenuComponent>
  )
}
Menu.proptypes = {
  getStyles: PropTypes.func,
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func
}

Menu.defaultProps = {
  getStyles: () => {}
}

export default withStyles(styles)(Menu);