import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';

const useStyles = makeStyles((theme) => {
  return ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root:{
      flex: 1,
    }
  });
});

export default function About() {
  const classes = useStyles({});
  return (
    <Page>
      <Grid className={classes.root} container justify='center' alignItems='center' alignContent='center'>
        <Grid item xs={12}>
          <Typography variant="h1" color="textSecondary" align='center'>
            <span style={{fontWeight:'lighter'}}>about_</span>us.
          </Typography>
        </Grid>
          <Grid item xs={12} sm={6} style={{marginTop: '40px', flex: 1, height: 'auto'}}>
            <img src="/img/about-us.png" width="100%"/>
            <Typography variant="body1" color="textSecondary" style={{marginTop: '40px'}} align="center">
            LA Studio is a studio specialized in visual arts and mixed arts based in São Paulo | Brazil.
    Our works of art seek to explore mixtures of colors and vibrant aspects with references to pop art and modern urban art.
            </Typography>
          </Grid>
      </Grid>
    </Page>
  );
}