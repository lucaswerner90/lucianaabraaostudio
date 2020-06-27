import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import axios from 'axios';

const useStyles = makeStyles((theme) => {
  return ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root:{
      flex: 1,
    }
  });
});

const About = ({description, url}) => {
  const classes = useStyles({});
  return (
    <Page>
      <Grid className={classes.root} container justify='center' alignItems='center' alignContent='center'>
        <Grid item xs={12}>
          <Typography variant="h1" color="textSecondary" align='center'>
            <span style={{fontWeight:100}}>about_</span>us.
          </Typography>
        </Grid>
          <Grid item xs={12} sm={6} style={{marginTop: '40px', flex: 1, height: 'auto'}}>
            <img src={url} width="100%"/>
            <Typography variant="body1" color="textSecondary" style={{marginTop: '40px'}} align="center">
            {description}
            </Typography>
          </Grid>
      </Grid>
    </Page>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL = process.env.STRAPI_URL;

  try {
    const {data} = await axios.get(STRAPI_URL.concat('/about-us'));
    const {description, cover:{url}} = data;
    const props = { description, url: STRAPI_URL.concat(url) };
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}

export default About;