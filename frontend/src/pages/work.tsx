import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import axios from 'axios';

export default function Work() {
  return (
    <Page>
        <Grid container justify='center'>
            <Grid item xs={12}>
                <Typography variant="h1" color="textSecondary" align='center'>
                <span style={{fontWeight:100}}>our_</span>work.
                </Typography>
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