import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

import withStyles from "../../hocs/withStyles";
import styles from "./Navbar.module.css";

import Icon from '@material-ui/core/Icon';


export const Navbar = ({ getStyles }) => {
  // console.log(props);
  // const router = useRouter();
  // const { onChange } = props;

  // const changeDarkMode = useCallback(({target: { value }}) => {
  //     onChange(value)
  // }, []);

  const [ showMenu, setShowMenu ] = useState(false);


  /**
   *
   * @param {value} param0 get language value to generate content about your chooice
   */
  // const changeLang = ({target: {value}}) => {
  //     const lang = value;
  //     router.push(router.pathname, router.pathname, {
  //         locale: lang
  //     })
  // }

  const componentListMenu = () => {
    return (
      <div className="sm:show" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/landing">
            <a className={getStyles("list-option")}>Landing</a>
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <>
      {/* <select onChange={changeDarkMode}>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
            </select>

            <select onChange={changeLang}>
                {
                    language.map(({key, value}, index) => (<option key={index} value={key}>{value}</option>))
                }
            </select>
            <p>holi navbar</p> */}
      <nav className={getStyles('navbar', 'sticky top-0')}>
        <div className={getStyles('navbar-wrapper')}>
          <div className={getStyles('navbar-align-items')}>
            <div onClick={() => setShowMenu(!showMenu)} className={getStyles('navbar-icon-menu-wrapper','sm:show')}>
              <Icon>menu</Icon>
            </div>
            <div className={getStyles()} className="lg:items-stretch lg:justify-start mx-10">
              LOGO
            </div>
            <div className={getStyles('navbar-icons-right-wrapper', 'sm:static sm:inset-auto sm:ml-6 sm:pr-5')}>
              <Icon>search</Icon>
              <Icon>shopping_cart</Icon>
              <Icon>person</Icon>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {showMenu ? componentListMenu() : <></>}
      </nav>
    </>
  );
};

Navbar.prototype = {
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navbar);