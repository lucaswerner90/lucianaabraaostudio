import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';
import SocialMediaIcons from './SocialMediaIcons';

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
    <Grid container className={classes.root} spacing={4} justify="center" alignItems="center" alignContent="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center" color="textPrimary">
          Contact us:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SocialMediaIcons size={50} instagram="https://www.instagram.com/lucianaabraostudio" facebook="https://www.facebook.com/lucianaabraooficiall/" whatsapp="5511952749768"/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color="textPrimary" align="center">Luciana Abrao Studio</Typography>
      </Grid>
    </Grid>
  )
};

export default Footer;