
import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';

import Image from 'atoms/Image';
import Paragraph from 'atoms/Paragraph';
import Card  from "atoms/Card"

import styles from './ProductCard.module.css';

export const ProductCard = ({
  name,
  srcImage,
  price,
  rate,
  className
})  => {
  return (
    <Card className={className}>
      <section>
        <Image src={srcImage} />
      </section>
      <section>
        <Paragraph size={'2xl'} weight={ 'medium' }>{name}</Paragraph>  
      </section>
      <section>
        <Paragraph size={'md'} weight={ 'medium' }>Star Rate {rate}</Paragraph>
      </section>
      <section className="text-right">
        <Paragraph size={'md'} weight={ 'medium' }>{price}$</Paragraph>  
      </section>
    </Card>
  )
}


ProductCard.prototype = {
  srcImage: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  className: PropTypes.string
}

ProductCard.defaultProps = {
  srcImage: '',
  name: '',
  price: 0,
  rate: 0,
  getStyles: () => {}
}

export default withStyles(styles)(ProductCard);
