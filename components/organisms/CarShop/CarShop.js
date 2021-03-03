import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';
import styles from './CarShop.module.css';

// HELPERS
import db, { subject, Collections } from 'helpers/db';
import { getProductsFromIndexDB, removeProductFromIndexDB, updateProductInIndexDb } from 'services/car-shop';

import Button from 'atoms/Button';
import Paragraph from 'atoms/Paragraph';
import Modal from 'molecules/Modal';
import ProductItem from 'molecules/ProductItem';

export const CarShop = ({ setShowModal, showModal }) => {
  /**
   * Hooks declared
   */
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getAllProducts();
    subject.subscribe(() => {
      getAllProducts();
    })
  }, [])

  /**
   * get all product stored in indexDb
   */
  const getAllProducts = () => {
    getProductsFromIndexDB()
    .then((products) => {
      if (!products.length) { 
        setTotal(0);
      } else { 
        handleTotal(products);
      }
      setProducts(products);
    });
  }

  // HANDLEs METHODS

  /**
  * 
  * @param {*} id identifier from product data.
  */
  const handleRemoveItem = (id) => {
    removeProductFromIndexDB(id);
  }

  const handleUpdateItem = (product) => {
    updateProductInIndexDb(product)
  }

  const handleTotal = (_products) => {
    const total = _products
    .map((p) => p.price * p.count)
    .reduce((a, b) => a + b);
    setTotal(total);
  }

  const getCarShopContent = () => {
    return (
        <>
          {products.map((product) => (
                <ProductItem
                  productName={product.name}
                  price={product.price}
                  srcImage={product.srcImage}
                  inCount={product.count}
                  removeItem={
                    () => handleRemoveItem(product.id)
                  }
                  outCount={(value) => {
                    // ASSIGN NEW VALUE
                    product.count = value;
                    // SET VALUE INTO STATE OF EACH OTHER
                    handleUpdateItem(product)
                  }}
                />
              ))}

              <hr />
              <div className="p-6">
                <Paragraph size={"sm"} weight={"bold"}>
                  Total
                </Paragraph>

                <Paragraph size={"sm"} weight={"bold"}>
                  {total}
                </Paragraph>
              </div>
              <div className="flex flex-col space-y-1 p-6">
                <Button type="primary">Pagar</Button>
                <Button type="primary">Ver Carrito</Button>
              </div>
        </>
    )
  }

  return (
    <>
      {showModal ? (
        <Modal
          showModal={showModal}
          showTitle={false}
          setShowModal={setShowModal}
        >
          {
            products.length ? getCarShopContent() : 'No hay productos seleccionados'
          }
        </Modal>
      ) : (
        false
      )}
    </>
  );
};

CarShop.prototype = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

export default withStyles(styles)(CarShop);
