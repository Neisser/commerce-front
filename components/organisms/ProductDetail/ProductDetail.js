import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';

import Image from 'atoms/Image';
import Input from 'atoms/Input';
import Button from 'atoms/Button';
import Paragraph from 'atoms/Paragraph';
import Heading from 'atoms/Heading';

import styles from './ProductDetail.module.css';

export const ProductDetail = ({
  getStyles,
  product,
  className,
  onAddProduct,
}) => {
  const classes = getStyles(className, 'product-detail');

  return (
    <div className={classes}>
      {product.images &&
        product.images.map((image, index) => {
          return <Image key={index} src={image} />;
        })}
      <Heading className="my-2">{product.name}</Heading>
      {product.prices &&
        product.prices.map((price) => {
          return (
            <Paragraph className="inline-block" key={price._id}>
              ${price.unit_price} / unidad
            </Paragraph>
          );
        })}
      <Paragraph className={getStyles('product-detail__description')}>
        {product.description}
      </Paragraph>
      {/* <Input className="h-full mr-2" type="number" /> */}
      <Button className="h-full" onClick={onAddProduct}>
        Agregar al Carrito
      </Button>
    </div>
  );
};

ProductDetail.propTypes = {
  getStyles: PropTypes.func.isRequired,
  className: PropTypes.string,
  product: PropTypes.object,
  onAddProduct: PropTypes.func,
};

ProductDetail.defaultProps = {
  getStyles: () => {},
};

export default withStyles(styles)(ProductDetail);
