import React from 'react';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';

interface IPropsPage{
  children: React.ReactNode
}

export default function Page({children}:IPropsPage) {
  return (
    <Grid container>
        <Header/>
        {children}
    </Grid>
  );
}