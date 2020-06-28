import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, useMediaQuery, IconButton, Grid } from '@material-ui/core';
import Link from '../Link';
import { useRouter } from 'next/router';
import theme from '../theme';
import MenuIcon from '@material-ui/icons/Menu';
import LogoHeader from './LogoHeader';
import LogoText from './LogoText';

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
        marginRight: theme.spacing(0),
      },
      title:{
        flex: 1,
        flexGrow:1,
        alignContent:'center',
        alignItems:'center'
      },
      topBar:{
        background:'transparent',
        margin:'0 auto',
        marginTop: 20,
        width:'90%',
        borderRadius:'40px',
        border:'2px solid #e6e6e661'
      }
    });
});

const HeaderButtons = () => {
  const classes = useStyles({});
  const router = useRouter();
  return (
    <React.Fragment>
      <Button color="inherit" className={classes.menuButton} onClick={() => router.push('/clients')}>clients</Button>
      <Button color="inherit" className={classes.menuButton} onClick={() => router.push('/about')}>about</Button>
      <Button color="inherit" className={classes.menuButton} onClick={() => router.push('/designers')}>designers</Button>
      <Button color="inherit" className={classes.menuButton} onClick={() => router.push('/work')}>work</Button>
      <Button color="primary" variant="outlined" className={classes.menuButton} onClick={() => router.push('/contact')}>contact</Button>
      {/* <Button color="primary" variant="outlined" onClick={() => router.push('/login')}>login</Button> */}
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
        <AppBar position="static" className={classes.topBar} variant="outlined">
          <Toolbar>
            {matches && <MobileMenuIcon/>}
              <Link href="/" className={classes.title} >
                <Grid container style={{flexGrow: 1}} alignItems='center' spacing={2}>
                  <Grid item>
                    <LogoHeader width={30} height={30}/>
                  </Grid>
                  <Grid item>
                    <LogoText width={150} height={40}/>
                  </Grid>
                </Grid>
              </Link>
            {!matches && <HeaderButtons />}
          </Toolbar>
        </AppBar>
    )
}
