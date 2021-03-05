import React from 'react';
import styles from './footer.module.css';
import PropTypes from 'prop-types';
import withStyles from '../../hocs/withStyles';
import Icon from '@material-ui/core/Icon';


import Paragraph from 'atoms/Paragraph';
export const Footer = ({ getStyles }) => {
  return (
    <footer className={getStyles('footer')}>
      {/* Logo */}
      <div className={getStyles('img')}>
        <img src="" alt="Logo"/>
      </div>
      {/* Información */}
      <div className={getStyles('informacion')}>
          <p className= {getStyles('informacion-p1', 'sm:text-md')}>
            Haz parte de nosotros y amplia tu negocio
          </p>
          <p className='text-xs sm:text-sm'>
            Haz <a className='underline font-semibold' href="/registro">clic aquí</a> para registrar tu tienda. <br/>
            Si ya estás registrado, haz <a className='underline font-semibold' href="/for-companies">clic aquí</a> para subir tu catálogo.
          </p>
      </div>

      {/* About Clusthers*/}
      <div className="sm:flex py-4 sm:text-left text-center">
        {/* Text */}
        <div className="sm:w-1/2">
        <p className='font-semibold text-sm pb-2'>
            About Clusthers
          </p>
          <p className='text-xs'>
            FAQ <br/>
            Shipping information<br/>
            Privacy policy<br/>
            Terms and conditions
          </p>
        </div>
        {/* Redes sociales */}
        <div className={getStyles('div-iconos')}>
          <p className={getStyles('div-iconos-p')}>
              Síguenos en
          </p>
          <Icon>email</Icon>
          <Icon>email</Icon> 
          <div className='text-xs'>
          <p>
            Email: clusthers@gmail.com
          </p>
        </div> 
        </div>
      </div>

    </footer>
  );
};
Footer.prototype = {
  getStyles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Footer);
