import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return ({
    root: {
      flex: 1,
      background: '#2d2d2d',
      padding: theme.spacing() * 4
    },
  });
});

const Footer = () => {
  const classes = useStyles({});
  return (
    <Grid container className={classes.root} justify="center" alignItems="center" alignContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" align="center" color="textPrimary">
          Contact
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
    </Grid>
  )
};

export default Footer;