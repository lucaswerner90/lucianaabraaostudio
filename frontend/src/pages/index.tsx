import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';
import { GetStaticProps } from 'next';
import axios from 'axios';
import Logo from '../components/Logo';
import LogoText from '../components/LogoText';

interface IIndexProps {
  url: string
}

export default function Index({url}:IIndexProps) {
  const rootClass = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(218, 46, 94, 0.6)),url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh'
  }
  return (
    <Grid container justify='center' style={rootClass}>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid item>
        <Grid container direction='column' justify='center' alignItems='center'>
          <LogoText width={800} height={200}/>
          <Grid item>
            <Logo width={300} height={300}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL:string = process.env.STRAPI_URL || 'http://localhost:1337';
  console.log('strapi URL : ',STRAPI_URL);
  try {
    const {data} = await axios.get(STRAPI_URL.concat('/page-settings'));
    const {homepageBackground:{url}} = data;
    const props = { url: STRAPI_URL.concat(url) };
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
};