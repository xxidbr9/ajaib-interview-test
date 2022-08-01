import React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from '@assets/favicon/x32.png';

type HeadProps = {
  children?: React.ReactNode;
  title?: string
};
const Head: React.FC<HeadProps> = (props) => {
  const { children, title } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      {children}
    </Helmet>
  );
};

Head.defaultProps = {
  children: null,
  title: 'Ajaib Interview Test',
};

export default Head;
