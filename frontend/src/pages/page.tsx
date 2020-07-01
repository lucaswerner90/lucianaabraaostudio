import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return ({
    root:{
      maxWidth:'100%',
      width:'90%',
      margin:'0 auto',
      height:'auto'
    },
  });
});
interface IPropsPage{
  children: React.ReactNode
}

export default function Page({children}:IPropsPage) {
  const classes=useStyles({});
  return (
    <React.Fragment>
      <Header/>
      <div className={classes.root}>
        {children}
      </div>
      <Footer/>
    </React.Fragment>
  );
}