import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
  return ({
    root:{
      maxWidth:'100%',
      width:'90%',
      margin:'0 auto',
      height:'auto'
    },
  });
});

export default function Page({children}:IPropsPage) {
  const classes=useStyles({});
  return (
    <React.Fragment>
      <Header/>
      <div className={classes.root}>
        {children}
      </div>
    </React.Fragment>
  );
}