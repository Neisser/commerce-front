import React from 'react';
import styles from './footer.module.css';
import PropTypes from 'prop-types';
import withStyles from '../../hocs/withStyles';
import Icon from '@material-ui/core/Icon';


import Paragraph from 'atoms/Paragraph';
export const Footer = ({ getStyles }) => {
  return (
    <footer className={getStyles('footer', 'mt-0', 'py-0', 'text-white')}>
      {/* Información */}
      <div className="py-6 px-20 border-b-2 border-gray-400 ">
          <p className= 'lg:text-base pb-2 font-bold'>
            Haz parte de nosotros y amplia tu negocio
          </p>
          <p className='text-sm'>
            Haz <a className='underline font-semibold' href="/registro">clic aquí</a> para registrar tu tienda. <br/>
            Si ya estás registrado, haz <a className='underline font-semibold' href="/for-companies">clic aquí</a> para subir tu catálogo.
          </p>
      </div>

      {/* About Clusthers*/}
      <div className="flex grid grid-cols-2 py-6">
        {/* Text */}
        <div className=" px-20 border-r-2 border-gray-400">
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
        <div className="px-20">
          <p className='font-semibold text-sm pb-2'>
              Síguenos en
          </p>
          <Icon className="justify-items-end inline">email</Icon>
          <Icon className="justify-items-end">email</Icon> 
          <div className='pt-4 text-sm'>
          <p>
            clusthers@gmail.com
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
