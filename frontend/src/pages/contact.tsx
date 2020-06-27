import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';

export default function Contact() {
  return (
    <Page>
      <Grid container justify='center' alignItems='center' alignContent='center'>
        <Grid item xs={12}>
          <Typography variant="h1" color="textSecondary" align='center'>
            <span style={{fontWeight:100}}>conta</span>ct.
          </Typography>
        </Grid>
      </Grid>
    </Page>
  );
}