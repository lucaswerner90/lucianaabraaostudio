import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';

export default function Contact() {
  return (
    <Page>
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h1" color="textSecondary" align='center'>
                <span style={{fontWeight:'100'}}>clien</span>ts.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src='/img/clients.png' width="100%"/>
            </Grid>
        </Grid>
    </Page>
  );
}