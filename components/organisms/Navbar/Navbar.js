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



export const Navbar = ({ getStyles, setShowModal, showModal }) => {
  // console.log(props);
  // const router = useRouter();
  // const { onChange } = props;

  // const changeDarkMode = useCallback(({target: { value }}) => {
  //     onChange(value)
  // }, []);

  const [ showMenu, setShowMenu ] = useState(false);
  const [ countCarShop, setCountCarShop ] = useState(0);
  // Example to tranlate page
  // /**
  //  *
  //  * @param {value} param0 get language value to generate content about your chooice
  //  */
  // const changeLang = ({target: {value}}) => {
  //     const lang = value;
  //     router.push(router.pathname, router.pathname, {
  //         locale: lang
  //     })
  // }
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
      {/* 
        <select onChange={changeDarkMode}>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
        </select>

        <select onChange={changeLang}>
            {
                language.map(({key, value}, index) => (<option key={index} value={key}>{value}</option>))
            }
        </select>
        <p>holi navbar</p> */}
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

Navbar.prototype = {
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navbar);
