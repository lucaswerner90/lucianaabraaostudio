import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Container, useTheme } from '@material-ui/core';
import Page from './page';
import { GetServerSideProps } from 'next';
import API_AXIOS from '../API_AXIOS';
import PageTitle from '../components/PageTitle';

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


export const About = ({description, images}:IPropsAbout) => {
  const classes = useStyles({});
  const theme = useTheme();
  return (
    <Page>
      <Container maxWidth="lg">
        <Grid className={classes.root} container justify='center'>
          <Grid item>
            <PageTitle light="about_" bold="us."/>
          </Grid>
            <Grid item>
              <Grid container justify="center" spacing={4}>
                <Grid item xs={12} style={{marginTop: theme.spacing()*4}}>
                  <Typography variant="h6" color="textPrimary" align="center">
                  {description}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" alignContent="center" spacing={4} style={{marginTop: theme.spacing()*4}}>
                    {images.map((image, _index) => {
                      return(
                        <Grid item key={_index} xs={12} sm={6} md={4}>
                          <Box boxShadow={4} borderRadius="40px" style={{
                              background:`url(${image}),center center`,
                              backgroundRepeat:'no-repeat',
                              backgroundSize:'cover',
                              height:'400px'}}>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </Page>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const API_URL = process.env && process.env.NEXT_PUBLIC_STRAPI_URL || '';
  try {
    const { data } = await API_AXIOS.get('/about-us');
    const {description, photos} = data;
    const images:any[] = photos.map((photo:any) => API_URL.concat(photo.formats.small.url));
    return {
      props:{
        description,
        images
      }
     };
    
  } catch (error) {
    return {
      props:{}
    };
  }
}

export default About;