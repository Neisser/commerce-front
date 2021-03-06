import { useCallback, useState, useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';


import withStyles from "../../../hocs/withStyles";
import styles from "./Navbar.module.css";

import { routes } from 'helpers/constants';
import db, { subject, Collections } from 'helpers/db';

import Menu from 'organisms/Menu';
import { getProductsFromIndexDB } from '../../../services/car-shop';



export const ProductList = ({ getStyles, setShowModal, showModal }) => {

  const [ showMenu, setShowMenu ] = useState(false);
  const [ countCarShop, setCountCarShop ] = useState(0);

  useEffect(() => {
    getProductsFromIndexDB()
    .then((products) => {
      setCountCarShop(products.length)
    });
    subject.subscribe(() => {
      getProductsFromIndexDB()
      .then((products) => {
        setCountCarShop(products.length)
      });
    })
  }, []);

  return (
    <>
   
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <nav className={getStyles('navbar', 'sticky top-0')}>
        <div className={getStyles('navbar-wrapper')}>
          <div className={getStyles('navbar-align-items')}>
            <div
              onClick={() => setShowMenu(!showMenu)}
              className={getStyles('navbar-icon-menu-wrapper', 'sm:show')}
            >
              <Icon>menu</Icon>
            </div>
            <div
              className={getStyles()}
              className="lg:items-stretch lg:justify-start mx-10"
            >
              LOGO
            </div>
            <div className={getStyles('navbar-icons-right-wrapper', 'sm:static sm:inset-auto sm:ml-6 sm:pr-5')}>
              <Icon className="cursor-pointer">search</Icon>
              <Badge badgeContent={countCarShop} color="error">
                <Icon onClick={() => setShowModal(!showModal)} className="cursor-pointer">shopping_cart</Icon>
              </Badge>
              <Icon>person</Icon>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

ProductList.prototype = {
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProductList);
