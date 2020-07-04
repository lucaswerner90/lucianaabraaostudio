import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import { GetStaticProps } from 'next';
import axios from '../axios';
import Logo from '../components/Logo';
import LogoText from '../components/LogoText';
import useProgressiveImage from '../hooks/useProgressiveImage';

const useStyles = makeStyles(() => {
  return ({
    root:{
      backgroundSize:'cover',
      backgroundPosition:'center',
      width: '100vw',
      height: '100vh'
    },
  });
});
interface IIndexProps {
  url: string,
  placeholder: string,
}

export default function Index({url,placeholder}:IIndexProps) {
  const classes = useStyles({});
  const loaded = useProgressiveImage(url);

  return (
    <Grid container justify='center' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url(${loaded || placeholder})`}} className={classes.root}>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid item>
        <Grid container direction='column' justify='center' alignItems='center'>
          <LogoText width={'70vw'} height={'20vw'}/>
          <Grid item>
            <Logo width={300} height={300}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const API_URL = process.env && process.env.NEXT_PUBLIC_STRAPI_URL || '';
  try {
    const {data} = await axios.get('/page-settings');
    const {homepageBackground} = data;
    const {formats} = homepageBackground;
    const {small,thumbnail} = formats;
    const props = { 
      url: API_URL.concat(small.url),
      placeholder: API_URL.concat(thumbnail.url)
    };
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
};