import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';

import Image from 'atoms/Image';
import Paragraph from 'atoms/Paragraph';
import Card  from "atoms/Card"

import styles from './CatalogueItem.module.css';

export const CatalogueItem = ({
  className,
  srcImage,
}) => {
  const defaultMaxDimmension = {
    maxHeight: '174px',
    maxWidth: '349px',
  }
  return (
    <Card className={className}>
      <div>
        <Image {...defaultMaxDimmension} src={srcImage}/>
      </div>
      <div className="text-center space-y-4 pb-8 pt-5">
        <Paragraph size={'xl'} weight={'normal'}>Adidas</Paragraph>
        <Paragraph size={'xl'} weight={'normal'}>Lorem ipsum dolor sit amet, consecteturasdasdasdasddsada asdsadad</Paragraph>
        <button>Ver catalogo</button>
      </div>
    </Card>
  ) 
}

CatalogueItem.prototype = {
  className: PropTypes.string,
  srcImage: PropTypes.string
}

export default withStyles(styles)(CatalogueItem)