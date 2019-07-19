import React from 'react';
import { Card, Dimmer, Loader, Divider, Grid, Segment } from 'semantic-ui-react';

function Character(props) {

  console.log(props.data, 'props.data');

  if(!props.data) {
    return <Dimmer size="massive" active>
      <Loader />
    </Dimmer>
  }

  return (
    <div className="card-container">
      <Segment>
        <div className="card-title">
          <h1>{props.data.name}</h1>
        </div>
        <Divider />
        <div className="info-container">
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <div>Height: {props.data.height}</div>
              <div>Eye Color: {props.data.eye_color}</div>
            </Grid.Column>
            <Grid.Column>
              <div>Mass Weight: {props.data.mass}</div>
              <div>Hair Color: {props.data.hair_color}</div>
            </Grid.Column>
          </Grid>
        </div>
      </Segment>
    </div>
  )
};

export default Character;
