import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import SocialMediaIcons from '../components/SocialMediaIcons';
import API_AXIOS from '../API_AXIOS';
import { GetStaticProps } from 'next';

export default function Contact({facebook,instagram}: IContactProps) {
  return (
    <Page>
      <Grid container justify='center' alignItems='center' alignContent='center' spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1" color="textPrimary" align='center'>
            <span style={{fontWeight:100}}>conta</span>ct.
          </Typography>
        </Grid>
        <Grid item>
          <SocialMediaIcons width={50} height={50} facebook={facebook} instagram={instagram} whatsapp={""}/>
        </Grid>
      </Grid>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await API_AXIOS.get('/page-settings');
    const {facebook, instagram} = data;
    const props = {facebook, instagram};
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}