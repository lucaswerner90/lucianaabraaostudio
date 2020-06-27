import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import axios from 'axios';
import DesignAbout from '../components/DesignAbout';

export default function Work({designs}) {
  return (
    <Page>
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h1" color="textSecondary" align='center'>
                <span style={{fontWeight:100}}>our_</span>work.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <DesignAbout data={designs}/>
            </Grid>
        </Grid>
    </Page>
  );
}

interface IClient {
  id: string,
  url: string,
  logo: {
    url: string
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL:string = process.env.STRAPI_URL || 'http://localhost:1337';

  try {
    const {data} = await axios.get(STRAPI_URL.concat('/designs'));
    const designs = data.map((design:any) => ({
        title: design.Title,
        image: STRAPI_URL.concat(design.images.formats.small.url),
        designer: design.designer.name
    }));
    const props = {designs};
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}