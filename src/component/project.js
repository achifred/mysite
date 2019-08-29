import React, { Component } from 'react';
import { project } from '../constant/data';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: project
    };
  }
  render() {
    const { works } = this.state;
    const { back } = this.props;
    return (
      <Container>
        <div style={styles.root}>
          <Grid container style={styles.grid}>
            {works.map(item => (
              <Paper style={{ width: 600, margin: 20 }} key={item.title}>
                <div>
                  <Grid style={{ justifyContent: 'center' }}>
                    <img src={item.picture} alt="" style={styles.img} />

                    <Typography style={styles.txt}>{item.title}</Typography>
                    <Typography style={styles.txt}>
                      {item.description}
                    </Typography>
                    <Typography style={styles.txt}>
                      <a href={item.link}>View Code</a>
                    </Typography>
                    <Typography style={styles.txt}>
                      <a href={item.site}>{item.site} </a>
                    </Typography>
                  </Grid>
                </div>
              </Paper>
            ))}
          </Grid>
          <Grid
            container
            style={{
              justifyContent: 'center',
              marginTop: 30,
              alignContent: 'space-between'
            }}
          >
            {back}
          </Grid>
        </div>
      </Container>
    );
  }
}
const styles = {
  grid: {
    justifyContent: 'center'
  },
  txt: {
    textAlign: 'center'
  },
  img: {
    height: 200,
    width: '100%'
  }
};

export default Project;
