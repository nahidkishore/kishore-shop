import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title> {title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'Welcome to Kishore Shop',
  description: 'We sell best products for cheap price',
  keywords:
    'computer,bags,clothes,laptop,electronics, buy electronics, cheap electronic',
};

export default Meta;
