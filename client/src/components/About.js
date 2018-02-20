import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Grid>
       <Row className="show-grid">
        <Col md={12}>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is my React - Redux project for Flatiron School. It's a simple items list with a Redux form to create a new item with a description. The app utilizes a Rails API backend, and sends GET and POST requests triggered by Redux actions to the API, persisting new data, and fetching and displaying data from the database in the React frontend. The app is a work in progress, and I intend to use it as a learning project, adding new functionality along the way. 
            </p>
            <p>
              <Button bsStyle="primary" href="/">Home</Button>
            </p>
          </Jumbotron>
        </Col>
       </Row>
     </Grid>
    );
  }
}

export default About