import React from 'react';
import { Grid } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import API_AXIOS from '../API_AXIOS';
import PageTitle from '../components/PageTitle';

export default function Clients() {
  return (
    <Page>
      <Grid container justify='center' style={{ minHeight: '90vh' }}>
        <Grid item xs={12}>
          <PageTitle light="client" bold="s." />
        </Grid>
        <Grid item>
          <img src='/img/clients.png' width="100%" />
        </Grid>
      </Grid>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL: string = process.env.STRAPI_URL || 'http://localhost:1337';

  try {
    const { data } = await API_AXIOS.get('/clients');
    const { ClientInfoComponent }: { ClientInfoComponent: IClient[] } = data;
    const clients = ClientInfoComponent.map((client) => ({
      id: client.id,
      url: client.url,
      logo: STRAPI_URL.concat(client.logo.url)
    }));
    const props = { clients };
    return { props };

  } catch (error) {
    return {
      props: {}
    };
  }
}