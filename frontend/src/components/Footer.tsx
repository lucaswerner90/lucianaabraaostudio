import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return ({
    root: {
      flex: 1,
      background: '#2d2d2d',
      padding: theme.spacing() * 4
    },
    video: {
      height: '100vh',
      width: '100vw',
      float: 'left',
      top: '0',
      padding: 'none',
      position: 'fixed',
    }
  });
});

const Footer = () => {
  const classes = useStyles({});
  return (
    <Grid container className={classes.root} justify="center" alignItems="center" alignContent="center">
      <Grid item>
        <Typography variant="h4" align="center" color="textPrimary">
          Contact
        </Typography>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  )
};

export default Footer;