import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../hocs/withStyles';

import Image from 'atoms/Image';
import Paragraph from 'atoms/Paragraph';
import Card  from 'atoms/Card'
import Button from 'atoms/Button';

import styles from './CatalogueItem.module.css';

export const CatalogueItem = ({
  className,
  srcImage,
  title,
  description
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
      <div className="text-center space-y-4 pb-8 px-4 pt-5">
        <Paragraph size={'xl'} weight={'normal'}>{title}</Paragraph>
        <Paragraph size={'xl'} weight={'normal'}>{description}</Paragraph>        
        <Button
          isInline
          type="primary"
        >
          Ver catalogo
        </Button>
      </div>
    </Card>
  ) 
}

CatalogueItem.prototype = {
  className: PropTypes.string,
  srcImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default withStyles(styles)(CatalogueItem)