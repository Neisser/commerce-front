import React from 'react';
import styles from './footer.module.css';
import PropTypes from "prop-types";
import { options } from './constants';
import withStyles from "../../hocs/withStyles";
import Icon from '@material-ui/core/Icon';

const ROOT = '/';
const routes = [
    {
        route: ROOT,
        label: 'home'
    },
    {
        route: '/home-section',
        label: 'home-section'
    }
];

export const Footer = ({getStyles}) => {
    return (
        <footer className={getStyles('footer', 'size-sm', 'size-md', 'size-lg')}>
            <div className={getStyles('div')}>

                {/* Logo */}
                <div className={getStyles('logo')}>
                    <img className="" alt="logo"/> 
                </div>

                {/* Contenido */}
                <div className={getStyles('text','size-sm', 'size-md', 'size-lg')}>
                    <p>
                    FAQ<br/>
                    Shipping information <br/>
                    Privacy policy <br/>
                    Terms and conditions
                    </p>
                </div>

                {/* Iconos */}
                <div className={getStyles('icon')}>
                    <Icon>mail</Icon>
                    <Icon>mail</Icon>
                    <Icon>mail</Icon>
                </div>

                
            </div>
               
      
        </footer>
        

    )
}
Footer.prototype = {
    getStyles: PropTypes.func.isRequired,
  };
  
export default withStyles(styles)(Footer);

