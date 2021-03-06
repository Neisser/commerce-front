import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { addProductInIndexDb } from 'services/car-shop';
import { getProductById } from 'services/products';

import Breadcrumb from 'atoms/Breadcrumb';
import Heading from 'atoms/Heading';
import ProductDetail from 'organisms/ProductDetail';

const productItem = () => {
  const router = useRouter();
  const [productItem, setProductItem] = useState({});

  console.log(productItem);

  useEffect(async () => {
    const product = await _getProductById(router.query.id);
    setProductItem(product);
  }, []);

  const _getProductById = async (id) => {
    const response = await getProductById(id);

    return response.length > 0 ? response[0] : {};
  };

  const addProduct = (product) => {
    addProductInIndexDb({ ...product, id: product._id });
  };

  return (
    <React.Fragment>
      <Breadcrumb className="m-auto my-10" />
      {productItem && (
        <ProductDetail
          product={productItem}
          onAddProduct={() => addProduct(productItem)}
        />
      )}
      {/* <Heading>Reviews</Heading> */}
      {/* TODO: Review */}
    </React.Fragment>
  );
};

productItem.getInitialProps = async ({ query }) => {
  const { id } = query;

  return { id };
};

export default productItem;
