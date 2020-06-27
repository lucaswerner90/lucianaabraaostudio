import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, IconButton } from '@material-ui/core';
import Link from '../Link';
import { useRouter } from 'next/router';
import theme from '../theme';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => {
    return ({
      root: {
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(218, 46, 94, 0.6)),url(/img/background.jpg)',
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

const HeaderButtons = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Button color="inherit" onClick={() => router.push('/clients')}>clients</Button>
      <Button color="inherit" onClick={() => router.push('/about')}>about</Button>
      <Button color="inherit" onClick={() => router.push('/contact')}>contact</Button>
      <Button color="inherit" onClick={() => router.push('/designers')}>designers</Button>
      <Button color="primary" variant="outlined" onClick={() => router.push('/login')}>login</Button>
    </React.Fragment>
  );
}


const MobileMenuIcon = () => {
  const classes = useStyles({});
  return(
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  );
}

export default function Header() {
    const classes = useStyles({});
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppBar position="static" style={{background:'transparent'}} variant="outlined">
          <Toolbar>
            {matches && <MobileMenuIcon/>}
            <Link href="/" className={classes.title} >
              <Typography variant="h6" component="h2" color="textSecondary">
                  <span style={{fontWeight:'100'}}>luciana</span>abraostudio.
              </Typography>
            </Link>
            {!matches && <HeaderButtons />}
          </Toolbar>
        </AppBar>
    )
}
