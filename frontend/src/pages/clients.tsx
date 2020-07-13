import React from 'react';
import { Grid, Container, Typography, Fade, Link } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import API_AXIOS from '../API_AXIOS';
import PageTitle from '../components/PageTitle';
import ProgressiveImage from 'react-progressive-graceful-image';
import theme from '../theme';

const Clients = React.memo(({clients}:IClientsPageProps) => {
  return (
    <Page>
      <Container maxWidth="lg">
      <Grid container justify='center' spacing={4}>
        <Grid item xs={12}>
          <PageTitle light="client" bold="s." />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4} style={{paddingBottom:theme.spacing(8)}}>    
            {clients.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Link href={item.url} target="_blank">
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <ProgressiveImage src={item.logo.url} placeholder={item.logo.thumbnail}>
                        {(_src: string | undefined, loading: boolean) => {
                          return loading ? (
                              <Fade in={true} exit={!loading}>
                                <div style={{
                                    margin:'0 auto',
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    filter: 'drop-shadow(1px 2px 3px black)',
                                    backgroundColor: theme.palette.grey.A700,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                  }}></div>
                              </Fade>
                          ) : (
                              <Fade in={true} timeout={2000}>
                                <div style={{
                                  width: '100%',
                                  height: '200px',
                                  filter:'drop-shadow(1px 2px 3px black)',
                                  backgroundImage: `url(${item.logo.thumbnail})`,
                                  backgroundSize: 'contain',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'center'
                                }}></div>
                              </Fade>
                            )
                        }}
                      </ProgressiveImage>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="textPrimary" align="center" style={{filter: 'drop-shadow(1px 2px 3px black)'}}>
                        {item.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
      </Container>

    </Page>
  );
});


export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL: string = process.env.NEXT_PUBLIC_STRAPI_URL || '';
  try {
    const { data } = await API_AXIOS.get('/clients');
    const clients: IClientPage[] = data.map((client: IClientPage) => {
      return {
        ...client,
        logo: {
          thumbnail: STRAPI_URL.concat(client.logo.thumbnail),
          url: STRAPI_URL.concat(client.logo.url)
        }
      }
    });
    const props = { clients };
    return { props };

  } catch (error) {
    return {
      props: {}
    };
  }
};

export default Clients;
