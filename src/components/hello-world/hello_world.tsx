import React from 'react';
import type { HelloWorldProps } from './hello_world.props';

function HelloWorld(props: HelloWorldProps) {
  const { name } = props;
  return (
    <div>
      Hello
      {name}
    </div>
  );
}

export default HelloWorld;
