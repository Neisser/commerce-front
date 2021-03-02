import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Icon from '@material-ui/core/Icon';

import PropTypes from "prop-types";

import Button from 'atoms/Button'; 

import Paragraph from 'atoms/Paragraph';
import { Card } from '@material-ui/core';



export const Payment = ({ getStyles }) => {
  return (
      <div className="grid grid-cols-1 h-screen w-full text-justify px-10 items-center justify-items-center	">
        {/* Ruta */}
        <div className="text-xs">
            <p>inicio/carrito/envio</p>
        </div>

        {/* Mensaje confirmación */}
        <div className="text-xl px-4">
            <p>Su compra ha sido <br/>
            realizada con éxito
            </p>
        </div>

        {/* Icono */} 
        <div>
            <Icon>check_circle_outline</Icon>
        </div>

        {/* Mensaje */}
        <div className="text-sm">
        <p>Recibirá un email a la dirección <br/>
            usuario@gmail.com con toda la <br/>
            informacion sobre su pedido, <br/>
            muchas gracias.
            </p>
        </div>

        {/* Boton */}
        
        <div class="mt-3 sm:mt-0 sm:ml-3 w-full">
              <a href="#" class="w-full flex justify-center py-2 border border-transparent text-sm font-medium bg-gray-300 md:text-sm ">
                Finalizar
              </a>
            </div>

      </div>
    
  ); 
};

Payment.prototype = {
  getStyles: PropTypes.func.isRequired,
};

export default Payment;