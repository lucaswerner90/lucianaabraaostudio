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
    },
    video:{
      height: '100vh',
      width: '100vw',
      float: 'left',
      top: '0',
      padding: 'none',
      position: 'fixed',
    }
  });
});


const Shop = () => {
  const classes = useStyles({});
  return (
    <Page>
      <Grid className={classes.root} container justify='center' alignItems='center' alignContent='center'>
        <Grid item xs={12}>
          <Typography variant="h1" color="textSecondary" align='center'>
            shop.
          </Typography>
        </Grid>
          <Grid item xs={12} sm={6} style={{marginTop: '40px', flex: 1, height: 'auto'}}>

          </Grid>
      </Grid>
    </Page>
  );
};

export default Shop;