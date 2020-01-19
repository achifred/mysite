import React, { Component } from 'react';
import { tech, about } from '../constant/data';
import { Typography, Grid, Paper } from '@material-ui/core';
import backgroundpic from '../static/undraw_developer_activity_bv83.svg';


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
         

          <Grid container style={styles.descContainer}>
            <Paper style={styles.paper}>
              {aboutinfo.map(item => (
                <div key={item.title}>
                  <Typography
                    style={{
                      fontSize: 30,
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

                  <Typography
                    style={{
                      fontSize: 16,
                      marginBottom: 10,
                  
                      color: 'white'
                    }}
                  >
                    {item.description}
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
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundpic})`,
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
    justifyContent: 'center',
    marginTop: 80
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

    marginTop: 10
  },
  resumeButton: {
    backgroundColor: '#2398AB',
    marginTop: 20
  },
  link: { textDecoration: 'none', color: 'white' }
};
export default Home;
