import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';
import styles from './CarShop.module.css';

// HELPERS
import { subject } from 'helpers/db';
import { getProductsFromIndexDB, removeProductFromIndexDB, updateProductInIndexDb, subjectPay } from 'services/car-shop';

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
    .map((product) => {
      const price = product.prices.find(prices => prices.min_stock >= product.count || product.count <= prices.max_stock).unit_price
      return (price * product.count)
    })
    .reduce((a, b) => a + b);
    setTotal(total);
  }

  const handleButtonPay = () => {
    const payload = {
      details: products.map( product => {
        const unitPrice = product.prices.find(prices => prices.min_stock >= product.count || product.count <= prices.max_stock).unit_price
        return ({
          productId: product.id,
          detailsProduct: [
            {
              quantity:product.count,
              unit_price: unitPrice,
              color: 'azul',
              size: 'L',
              material: 'poliester',
            }
          ],
        })
      }),
      code: 'smefemifs8',
      userId:'603c5a21978d3d3d008826df',
      companyId:'603ad5c0ee3ee2389aaf3e34',
      couponsId: '603c7dbc0e76c2066c33d064',
      address:{
          name: 'alskjdklas',
          address: 'alskjdklas',
          optional: 'alskjdklas',
          country: 'alskjdklas',
          province: 'alskjdklas',
          city: 'alskjdklas',
          location: 'alskjdklas',
          neighborhood: 'alskjdklas',
          postal_code: 139081203,
          contact: 'alskjdklas'
      },
      total: total
    }
    subjectPay.next(payload);
  }

  const getCarShopContent = () => {
    return (
        <>
          {
            products.map((product) => {
              const price = product.prices.find(prices => prices.min_stock >= product.count || product.count <= prices.max_stock).unit_price
              return (
                  <ProductItem
                    productName={product.name}
                    price={price}
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
                )
            })
          }

              <hr />
              <div className="p-6">
                <Paragraph size={"sm"} weight={"bold"}>
                  Total
                </Paragraph>

                <Paragraph size={"sm"} weight={"bold"}>
                  {total} COL
                </Paragraph>
              </div>
              <div className="flex flex-col space-y-1 p-6">
                <Button type="primary" onClick={() => handleButtonPay()}>Pagar</Button>
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
  setShowModal: PropTypes.func
};

export default withStyles(styles)(CarShop);
