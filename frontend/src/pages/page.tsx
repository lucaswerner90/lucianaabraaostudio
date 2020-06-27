import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => {
  return ({
    root: {
        background: theme.palette.background,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow:1
    }
  });
});

export default function Page({children}) {
  const classes = useStyles({});
  return (
    <React.Fragment>
        <Header/>
        {children}
    </React.Fragment>
  );
}