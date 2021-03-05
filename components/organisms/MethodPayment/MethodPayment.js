import React, { useRef, useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import withStyles from "../../../hocs/withStyles";


import Button from 'atoms/Button';
import Modal from 'molecules/Modal';

import styles from './MethodPayment.module.css';

import { payStripes } from 'services/payment-method';

export const MethodPayment = ({ showModal, setShowModal, payload }) => {

  const activeStripe = async () => {
    await payStripes(payload)
  }

  return (
    <>
      <Modal
        showModal={showModal}
        title={'Selecciona un metodo de pago'}
        showTitle={true}
        setShowModal={setShowModal}
        positionY= {'center'}
        positionX={'center'}
        maxWidth={'30rem'}
        maxheight={'40rem'}
      > 
        <div className="p-4 flex flex-col overflow-y-scroll justify-center items-center space-y-2 h-full">
          <Button type="primary" onClick={() => activeStripe()}>Stripe</Button>
          {/* <Button type="primary" onClick={() => activePaypal()}>Paypal</Button> */}
          {/* <div ref={ paypalRef }></div> */}

          <PayPalScriptProvider options={{ "client-id": "test" }} >
              <PayPalButtons style={{ layout: "horizontal" }} createOrder={
                (data, actions) => {
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        description: "Your description",
                        amount: {
                          value: 0.2,
                        },
                      },
                    ],
                  });
                }
              } />
          </PayPalScriptProvider>
        </div>
      </Modal>
    </>
  )
}

export default withStyles(styles)(MethodPayment)