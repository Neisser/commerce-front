import React from 'react';
import Heading from 'atoms/Heading';
import { Breadcrumbs } from 'nextjs-breadcrumbs';

const productItem = () => {
  const breadcrumbs = Breadcrumbs();
  console.log(breadcrumbs);

  return (
    <React.Fragment>
      <Heading>Adidas</Heading>

      {breadcrumbs}
    </React.Fragment>
  );
};

export default productItem;
