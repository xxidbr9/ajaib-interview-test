import React from 'react';
import type { HelloWorldProps } from './hello-world.props';

const HelloWorld = (props: HelloWorldProps) => {
  const { name } = props;
  return (
    <div>
      Hello
      {name}
    </div>
  );
};

export default HelloWorld;
