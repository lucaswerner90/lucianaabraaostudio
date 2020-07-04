import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import axios from '../axios';

export default function Clients() {
  return (
    <Page>
        <Grid container justify='center' style={{minHeight:'90vh'}}>
            <Grid item xs={12}>
                <Typography variant="h1" color="textPrimary" align='center'>
                <span style={{fontWeight:100}}>clien</span>ts.
                </Typography>
            </Grid>
            <Grid item>
                <img src='/img/clients.png' width="100%"/>
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
    const {data} = await axios.get('/clients');
    const {ClientInfoComponent}: {ClientInfoComponent: IClient[]} = data;
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