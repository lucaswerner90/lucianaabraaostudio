import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Page from './page';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles((theme) => {
  return ({
    loginForm: {
      maxWidth: '400px',
      width: '100%',
      marginTop: theme.spacing() * 4
    },
  });
});

export default function Index() {
  const classes = useStyles({});
  return (
    <Page>
        <Grid container justify="center" alignContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h1" color="textSecondary" align='center'>
                    <span style={{fontWeight:100}}>log_</span>in.
                </Typography>
            </Grid>
            <Grid item className={classes.loginForm}>
                <LoginForm />
            </Grid>
        </Grid>

    </Page>
  );
}