import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export function Href({ path, name }) {
  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Button variant="contained" style={styles.resumeButton}>
        <Link style={styles.link} to={path}>
          {name}
        </Link>
      </Button>
    </Grid>
  );
}

const styles = {
  resumeButton: {
    backgroundColor: '#2398AB',
    marginTop: 20
  },
  link: { textDecoration: 'none', color: 'white' }
};
