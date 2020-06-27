import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import axios from 'axios';

export default function Contact() {
  return (
    <Page>
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h1" color="textSecondary" align='center'>
                <span style={{fontWeight:100}}>clien</span>ts.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src='/img/clients.png' width="100%"/>
            </Grid>
        </Grid>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL:string = process.env.STRAPI_URL;

  try {
    const {data} = await axios.get(STRAPI_URL.concat('/clients'));
    const {ClientInfoComponent} = data;
    const clients = ClientInfoComponent.map((client) => ({
      id: client.id,
      url: client.url,
      logo: STRAPI_URL.concat(client.logo.url)
    }));
    const props = {clients};
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}