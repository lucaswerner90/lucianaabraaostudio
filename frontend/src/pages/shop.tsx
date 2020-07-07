import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container } from '@material-ui/core';
import Page from './page';
import { GetStaticProps } from 'next';
import axios from '../axios';
import ShopChardItemFeatured from '../components/ShopCardItemFeatured';
import ShopChardItem from '../components/ShopCardItem';

const useStyles = makeStyles((theme) => {
  return ({
    root:{
      flexGrow: 1,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    shopItemDiv:{
      position:'relative',
      width:'100%',
      margin:'0 auto',
      minHeight:'400px',
      opacity:0.8,
      transition:'opacity .5s',
      '&:hover':{
        opacity: 1,
      }
    },
    shopItemDivImage:{
      flex: 1,
      height:'400px',
      backgroundSize:'cover',
    },
    shopItemOverlay:{
      position:'absolute',
      top:0,
      background:'linear-gradient(to top, #171717, #1717177a)'
    }
  });
});

const Shop = ({featured, notFeatured}:IShopProps) => {
  const classes = useStyles({});
  return (
    <Page>
      <Container maxWidth="xl">
        <Typography variant="h1" color="textPrimary" align='center'>
          shop.
        </Typography>
        <Grid container spacing={2} className={classes.root}>
            {featured.map((item: IProduct) => (
              <Grid key={item.id} item xs={12} sm={12} md={6} lg={3}>
                <ShopChardItemFeatured id={item.id} title={item.title} description={item.description} image={item.image} />
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={2} className={classes.root}>
            {notFeatured.map((item: IProduct) => (
              <Grid key={item.id} item xs={12} sm={12} md={4} lg={3}>
                <ShopChardItem id={item.id} title={item.title} description={item.description} image={item.image} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const API_URL = process.env && process.env.NEXT_PUBLIC_STRAPI_URL || '';

  try {
    const {data} = await axios.get('/designs');
    const products = data.map( (x:any) => {
      return {
        featured: x.featured,
        id: x._id,
        description: x.Description,
        image: API_URL.concat(x.images[0].formats.thumbnail.url),
        title: x.Title,
      };
    });
    const featured = products.filter((x:any) => x.featured);
    const notFeatured = products.filter((x:any) => !x.featured);
    const props = { featured, notFeatured };
    return { props };
  } catch (error) {
    console.error(error);
    return {
      props:{}
    };
  }
}

export default Shop;