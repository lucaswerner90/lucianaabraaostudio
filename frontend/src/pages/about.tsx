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
      minHeight:'90vh'
    },
  });
});

interface IPropsAbout {
  description: string,
  url: string
}
const About = ({description, url}:IPropsAbout) => {
  const classes = useStyles({});
  return (
    <Page>
      <Grid className={classes.root} container justify='center' direction="row">
        <Grid item>
          <Typography variant="h1" color="textPrimary" align='center'>
            <span style={{fontWeight:100}}>about_</span>us.
          </Typography>
        </Grid>
          <Grid item>
            <img src={url} width="100%"/>
            <Typography variant="body1" color="textPrimary" style={{marginTop: '40px'}} align="center">
            {description}
            </Typography>
          </Grid>
      </Grid>
    </Page>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL:string = process.env.STRAPI_URL || 'http://localhost:1337';

  try {
    const {data} = await axios.get(STRAPI_URL.concat('/about-us'));
    const {description, cover:{formats:{small:{url}}}} = data;
    const props = { description, url: STRAPI_URL.concat(url) };
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}

export default About;