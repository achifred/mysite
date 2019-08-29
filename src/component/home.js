import React, { Component } from 'react';
import { tech, about } from '../constant/data';
import { Typography, Grid, Avatar, Paper, Button } from '@material-ui/core';
import backgroundpic from '../static/bg.jpg';
import profilepic from '../static/code.jpg';
import { Link } from 'react-router-dom';
import Footer from './footer';
//import  Navbar from './navbar'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techinfo: tech,
      aboutinfo: about
    };
  }

  render() {
    const { aboutinfo } = this.state;
    return (
      <div style={styles.homeContainer}>
        <Grid container style={styles.contentContainer}>
          <Grid container style={styles.avatarContainer}>
            <Avatar src={profilepic} style={styles.avatar} />
          </Grid>

          <Grid container style={styles.descContainer}>
            <Paper style={styles.paper}>
              {aboutinfo.map(item => (
                <div key={item.title}>
                  <Typography
                    style={{
                      fontSize: 35,
                      marginBottom: 10,
                      fontWeight: 'bold'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography key={item} style={styles.descText}>
                    {item.description}
                  </Typography>
                </div>
              ))}
              <Grid container style={{ justifyContent: 'center' }}>
                <Button variant="contained" style={styles.resumeButton}>
                  <Link style={{ textDecoration: 'none' }} to="/resume">
                    {' '}
                    View Resume
                  </Link>
                </Button>
              </Grid>
              <Grid container style={{ justifyContent: 'center' }}>
                <Button variant="contained" style={styles.resumeButton}>
                  <Link style={{ textDecoration: 'none' }} to="/project">
                    {' '}
                    Project
                  </Link>
                </Button>
              </Grid>
              <Grid container style={{ justifyContent: 'center' }}>
                <Button variant="contained" style={styles.resumeButton}>
                  <Link style={{ textDecoration: 'none' }} to="/skill">
                    {' '}
                    Skills
                  </Link>
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Footer />
      </div>
    );
  }
}
const styles = {
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundpic})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },

  avatarContainer: {
    justifyContent: 'center',
    marginTop: 60
  },
  avatar: {
    height: 150,
    width: 150,
    alignItem: 'center'
  },
  descContainer: {
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: 'transparent',
    width: 700,
    height: 400,
    margin: 15
  },
  descText: {
    fontFamily: 'Times New Roman',
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',

    marginTop: 20
  },
  resumeButton: {
    backgroundColor: '#2398AB',
    marginTop: 20
  }
};
export default Home;
