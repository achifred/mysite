import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#2398AB' }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: 'white' }} to="/">
              {' '}
              Home
            </Link>
          </Typography>
          <Link
            to="/project"
            style={{
              color: 'white',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Project
          </Link>
          <Link
            to="/skill"
            style={{
              color: 'white',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Skill
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
