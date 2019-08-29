import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export class Footer extends Component {
  render() {
    return (
      <Grid container justify="center" style={{ margin: 20 }}>
        <a href="https://www.linkedin.com/in/fred-achi-88034b172/">
          <i className="fab fa-linkedin-in fa-2x mr-3"> </i>
        </a>
        <a href="https://twitter.com/fredLoyalti">
          <i className="fab fa-twitter fa-2x mr-3"> </i>
        </a>
      </Grid>
    );
  }
}

export default Footer;
