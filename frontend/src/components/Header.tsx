import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, useMediaQuery, IconButton, Grid, Drawer, List, ListItem, Box, Typography } from '@material-ui/core';
import Link from '../Link';
import { useRouter } from 'next/router';
import theme from '../theme';
import MenuIcon from '@material-ui/icons/Menu';
import LogoHeader from './LogoHeader';
import LogoText from './LogoText';
import SocialMediaIcons from './SocialMediaIcons';

const useStyles = makeStyles((theme) => {
    return ({
      menuButton: {
        marginRight: theme.spacing(4),
      },
      title:{
        alignContent:'center',
        alignItems:'center'
      },
      topBar:{
        background:'transparent',
        margin:'0 auto',
        marginTop: 20,
        width:'90%',
        borderRadius:'40px',
        border:'1px solid #e6e6e62b'
      },
    });
});

const HeaderButtons = () => {
  const classes = useStyles({});
  const router = useRouter();

  return (
    <React.Fragment>
      <Button color="inherit" className={classes.menuButton} onClick={() => router.push('/about')}>about</Button>
      <Button color="inherit" className={classes.menuButton} onClick={() => router.push('/clients')}>clients</Button>
      <Button color="primary" variant="outlined" onClick={() => router.push('/shop')}>shop</Button>
    </React.Fragment>
  );
}


const MobileMenuIcon = () => {
  const classes = useStyles({});
  const [open,setOpen] = useState<boolean>(false);
  const router = useRouter();

  return(
    <React.Fragment>
      <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)} >
        <List style={{ width: '100%', background: 'none' }}>
          <ListItem>
            <Box flex={1} paddingTop={2} paddingBottom={2} justifyContent="center" justifyItems="center">
              <Typography variant="body1" align="center">
                Luciana Abrao Studio
              </Typography>
              <Box flex={1} paddingTop={2} paddingBottom={2} justifyContent="center" justifyItems="center">
                <Typography variant="body2" align="center" color="textSecondary" style={{ marginBottom: 20 }}>
                  Follow us on social media
              </Typography>
                <SocialMediaIcons
                  size={30}
                  instagram="https://www.instagram.com/lucianaabraostudio"
                  facebook="https://www.facebook.com/lucianaabraooficiall/"
                  whatsapp="5511952749768"
                />
              </Box>
            </Box>
            </ListItem>
            <ListItem button>
              <Button variant="outlined" fullWidth color="primary" onClick={() => router.push('/about')}>About</Button>
            </ListItem>
            <ListItem button>
              <Button variant="outlined" fullWidth color="primary" onClick={() => router.push('/clients')}>Clients</Button>
            </ListItem>
            <ListItem button>
              <Button variant="outlined" fullWidth color="primary" onClick={() => router.push('/shop')}>Shop</Button>
            </ListItem>
            
        </List>
      </Drawer>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
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
          {!matches && <Box style={{ marginLeft: theme.spacing(10), flex: 1 }}>
            <SocialMediaIcons
              size={20}
              instagram="https://www.instagram.com/lucianaabraostudio"
              facebook="https://www.facebook.com/lucianaabraooficiall/"
              whatsapp="5511952749768"
            />
          </Box>}
            
            {!matches && <HeaderButtons />}
          </Toolbar>
        </AppBar>
    )
}
