import React from 'react';
import { Card, Dimmer, Loader } from 'semantic-ui-react';

function Character(props) {
  console.log(props.data, 'props.data');

  if(!props.data) {
    return <Dimmer size="massive" active>
      <Loader />
    </Dimmer>
  }

  return (
    <Card>

    </Card>
  )
};

export default Character;
