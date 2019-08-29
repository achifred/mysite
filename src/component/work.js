import React, { Component } from 'react';
import { Typography, Button, Grid, Paper, Divider } from '@material-ui/core';
import { education, workexp } from '../constant/data';

class Work extends Component {
  state = {
    education,
    workexp
  };
  render() {
    const { prev, back, Container } = this.props;
    const { education, workexp } = this.state;
    return (
      <div style={Container}>
        <Grid container>
          <Grid container style={styles.workContainer}>
            <Paper style={styles.paper}>
              <Typography style={styles.headings}>Education</Typography>
              {education.map(item => (
                <div key={item.year}>
                  <Typography style={{ fontSize: 25, margin: 15 }}>
                    {item.name}
                  </Typography>
                  <Typography style={styles.roles}>
                    {item.programe} {item.year}
                  </Typography>
                  <Typography style={styles.ContentText}>
                    {item.description}
                  </Typography>
                </div>
              ))}

              <Divider />

              <Typography style={styles.headings}>Work Experience</Typography>
              {workexp.map(item => (
                <div key={item.date}>
                  <Typography style={{ fontSize: 25, margin: 15 }}>
                    {item.company}
                  </Typography>
                  <Typography style={styles.roles}>
                    {item.role} {item.date}
                  </Typography>

                  <div>
                    {item.project.map(item => (
                      <div key={item.role}>
                        <Typography style={{ marginBottom: 20 }}>
                          {item.role}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
        <Grid container style={{ justifyContent: 'center' }}>
          {back}
          <Button style={styles.btn} variant="contained" onClick={prev}>
            About me
          </Button>{' '}
        </Grid>
      </div>
    );
  }
}
const styles = {
  paper: {
    width: 750,
    margin: 15,
    textAlign: 'center'
  },
  workContainer: {
    justifyContent: 'center'
  },
  headings: {
    margin: 15,
    fontSize: 30,
    color: '#2398AB'
  },
  ContentText: {
    marginLeft: 15,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Times New Roman'
  },
  roles: {
    fontFamily: 'San Serif',
    marginBottom: 20,
    marginLeft: 15,
    fontSize: 20,
    fontStyle: 'italic'
  },
  btn: {
    marginRight: 30,
    backgroundColor: 'transparent',
    color: 'black'
  }
};

export default Work;
