import React from 'react';
import { Card, Dimmer, Loader, Divider, Grid } from 'semantic-ui-react';

function Character(props) {



  console.log(props.data, 'props.data');

  if(!props.data) {
    return <Dimmer size="massive" active>
      <Loader />
    </Dimmer>
  }

  return (
    <div className="card-container">
      <div className="card-title">
        <h1>{props.data.name}</h1>
      </div>
      <Divider />
      <div className="info-container">
        <Grid columns={2}>
          <Grid.Column>
            <p>Height: {props.data.height}</p>
          </Grid.Column>
          <Divider verticle />
          <Grid.Column>
            <p>Mass Weight: {props.data.mass}</p>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
};

export default Character;
