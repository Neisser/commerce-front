
import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';

import Image from 'atoms/Image';
import Paragraph from 'atoms/Paragraph';
import Card  from "atoms/Card"

import styles from './ProductCard.module.css';

export const ProductCard = ({
  key,
  name,
  srcImage,
  prices,
  rate,
  className
})  => {
  const unitPrice = `$ ${prices[0]?.unit_price ?? 0} - $ ${prices[prices.length - 1]?.unit_price  ?? 0}`
  const minAmount = Math.min.apply(Math, prices.map(price => price.min_stock));
  const maxAmount = Math.max.apply(Math, prices.map(price => price.max_stock));
  const value = `desde: ${minAmount} - hasta: ${maxAmount}`;

  return (


    <div key={key} className="card-content shadow" style={{height:'425px'}}>
      <div className="w-full h-2/3 bg-cover bg-center " style={{ backgroundImage: `url(${srcImage})`}}>
      </div>
      <div className="w-full h-1/3 p-4 flex flex-col justify-between bg-white">
        <Paragraph className={'truncate'} size={"xl"} weight={"bold"}>
          {name}
        </Paragraph>
        <div className="flex text-right">
          <Paragraph size={"xl"} weight={"bold"}>
            {unitPrice}
          </Paragraph>
        </div>
      </div>
    </div>
    // <Card className={`${className} shadow`} key={key}>
    //   <section className="p-4">
    //     <Image src={srcImage} />
    //   </section>
    //   <section className="px-4">
    //     <Paragraph size={'2xl'} weight={ 'medium' }>{name}</Paragraph>  
    //   </section>
    //   <section className="px-4">
    //     <Paragraph size={'md'} weight={ 'medium' }>Star Rate {rate}</Paragraph>
    //   </section>
    //   <section className="px-4 text-right">
    //     <Paragraph size={'md'} weight={ 'medium' }>{ unitPrice } / unidad</Paragraph>
    //   </section>
    //   <section className="px-4 pb-4 text-left">
    //     <Paragraph size={'md'} weight={ 'normal' }>{ value }</Paragraph>
    //   </section>
    // </Card>
  )
}


ProductCard.prototype = {
  key: PropTypes.string,
  srcImage: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired,
  rate: PropTypes.number.isRequired,
  className: PropTypes.string
}

ProductCard.defaultProps = {
  srcImage: '',
  name: '',
  prices: [],
  rate: 0,
  getStyles: () => {}
}

export default withStyles(styles)(ProductCard);
