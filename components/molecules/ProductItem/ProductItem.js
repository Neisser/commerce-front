import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import withStyles from "../../../hocs/withStyles";
import styles from './ProductItem.module.css';
import { options } from './constants';

// ATOMS
import Icon from '@material-ui/core/Icon';
import Image from  'atoms/Image';
import Input from 'atoms/Input';
import Paragraph from 'atoms/Paragraph';


export const ProductItem = ({
  inCount,
  outCount,
  getStyles,
  productName,
  price,
  srcImage,
  type,
  removeItem
}) => {
  const [ count, setCount ] = useState(inCount);
  useEffect(() => {
    outCount(1);
  }, []);

  return (
    <>
      <main className={getStyles('product-item')}>
        <article>
          <Image
            isBorder
            src={srcImage}
            height={'77px'}
            width={'77px'}
            />
        </article>
        <div className={getStyles('product-item-content')}>
          <div className={getStyles('product-item-content-title')}>
            <div className="w-full flex-1">
              <Paragraph size={'sm'}>{productName}</Paragraph>
            </div>
            <Icon className="text-xs cursor-pointer" onClick={() => removeItem() }>clear</Icon>
          </div>
          <div className="grid grid-cols-4 mt-2">
            <div className="col-span-2">
              <Input
                value={count}
                onChange={(e) => {
                  const countParsed = parseInt(e.target.value);
                  if (countParsed >= 0) {
                    setCount(countParsed);
                    outCount(countParsed);
                  }
                }}
                type="number"
              />
            </div>
            <div className="col-span-2 flex justify-center items-center text-center">
              <Paragraph size={'sm'} >{price} USD</Paragraph>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
ProductItem.prototype = {
  inCount: PropTypes.number,
  outCount: PropTypes.func,
  getStyles: PropTypes.func,
  productName: PropTypes.string,
  price: PropTypes.number,
  srcImage: PropTypes.string,
  type: PropTypes.oneOf(options.type),
  removeItem: PropTypes.func
}

ProductItem.defaultProps = {
  outCount: (value) => value,
  getStyles: () => {},
  type: 'modal'
}

export default withStyles(styles)(ProductItem)