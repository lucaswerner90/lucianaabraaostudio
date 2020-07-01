import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Page from './page';
import SocialMediaIcons from '../components/SocialMediaIcons';
import axios from 'axios';
import { GetStaticProps } from 'next';

interface IContactProps {
  facebook:string,
  instagram:string
}

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
  const STRAPI_URL:string = process.env.STRAPI_URL || 'http://localhost:1337';

  try {
    const {data} = await axios.get(STRAPI_URL.concat('/page-settings'));
    const {facebook, instagram} = data;
    const props = {facebook, instagram};
    return { props };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}