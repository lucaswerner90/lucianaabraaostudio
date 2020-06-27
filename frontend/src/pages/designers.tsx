import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Page from './page';

const useStyles = makeStyles((theme) => {
  return ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow:1
    }
  });
});

export default function Designers() {
  return (
    <Page>
        <Typography variant="h1" color="textSecondary" align='center'>
          <span style={{fontWeight:'100'}}>studio_</span>designers.
        </Typography>
    </Page>
  );
}