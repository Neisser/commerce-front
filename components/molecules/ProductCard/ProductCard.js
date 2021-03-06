import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';

import Image from 'atoms/Image';
import Paragraph from 'atoms/Paragraph';
import Card from 'atoms/Card';
import Button from 'atoms/Button';

import styles from './ProductCard.module.css';

export const ProductCard = ({
  key,
  name,
  srcImage,
  prices,
  rate,
  className,
  onAddProduct,
  onProductDetailClick,
}) => {
  const unitPrice = prices.map((price) => `$ ${price.unit_price}`).join(' - ');
  const minAmount = Math.min.apply(
    Math,
    prices.map((price) => price.min_stock)
  );
  const maxAmount = Math.max.apply(
    Math,
    prices.map((price) => price.max_stock)
  );
  const value = `desde: ${minAmount} - hasta: ${maxAmount}`;

  return (
    <Card className={`${className} shadow`} key={key}>
      <article onClick={onAddProduct}>
        <section className="p-4">
          <Image src={srcImage} />
        </section>
        <section className="px-4">
          <Paragraph size={'2xl'} weight={'medium'}>
            {name}
          </Paragraph>
        </section>
        <section className="px-4">
          <Paragraph size={'md'} weight={'medium'}>
            Star Rate {rate}
          </Paragraph>
        </section>
        <section className="px-4 text-right">
          <Paragraph size={'md'} weight={'medium'}>
            {unitPrice} / unidad
          </Paragraph>
        </section>
        <section className="px-4 pb-4 text-left">
          <Paragraph size={'md'} weight={'normal'}>
            {value}
          </Paragraph>
        </section>
      </article>
      <section>
        <Button onClick={onProductDetailClick}>Ver Producto</Button>
      </section>
    </Card>
  );
};

ProductCard.propTypes = {
  key: PropTypes.string,
  srcImage: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired,
  rate: PropTypes.number.isRequired,
  className: PropTypes.string,
  onAddProduct: PropTypes.func,
  onProductDetailClick: PropTypes.func,
};

ProductCard.defaultProps = {
  srcImage: '',
  name: '',
  prices: [],
  rate: 0,
  getStyles: () => {},
};

export default withStyles(styles)(ProductCard);
