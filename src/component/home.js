import React, { Component } from 'react';
import { tech, about } from '../constant/data';
import { Typography, Grid, Avatar, Paper } from '@material-ui/core';
import backgroundpic from '../static/artbg.jpg';
import profilepic from '../static/code.jpg';

import Footer from './footer';
import { Href } from './href';
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
      <Grid container style={styles.homeContainer}>
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
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography key={item} style={styles.descText}>
                    {item.slug}
                  </Typography>
                </div>
              ))}

              <Href path="/project" name="View Project" />
              <Href path="/skill" name="View skill" />
              <Href path="/resume" name="View Resume" />
            </Paper>
          </Grid>
        </Grid>

        <Footer />
      </Grid>
    );
  }
}
const styles = {
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    width: '100%',
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
    color: 'white',
    fontSize: 30,
    textAlign: 'center',

    marginTop: 20
  },
  resumeButton: {
    backgroundColor: '#2398AB',
    marginTop: 20
  },
  link: { textDecoration: 'none', color: 'white' }
};
export default Home;
