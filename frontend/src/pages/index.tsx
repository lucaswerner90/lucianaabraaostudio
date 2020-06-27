import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => {
  return ({
    root: {
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(218, 46, 94, 0.6)),url(/img/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow:1
    }
  });
});

export default function Index() {
  const classes = useStyles({});
  return (
    <Grid container justify='center' className={classes.root}>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1" color="textSecondary" align='center'>
          <span style={{fontWeight:'100'}}>luciana</span>abraostudio.
        </Typography>
      </Grid>
    </Grid>
  );
}