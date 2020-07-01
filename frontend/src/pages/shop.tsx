import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container, Fade, Button, useTheme } from '@material-ui/core';
import Page from './page';
import ProgressiveImage from 'react-progressive-graceful-image';
import Skeleton from '@material-ui/lab/Skeleton';
import { GetStaticProps } from 'next';
import axios from 'axios';

interface IProduct {
  id: string,
  title: string,
  image: string
}

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


interface IShopButtonProps {
  itemID: string
}
const ShopButton = ({itemID}:IShopButtonProps) => {
  return (
    <Button fullWidth variant="outlined" color="primary" onClick={() => console.log('redirect to product id', itemID)}>
      See more
    </Button>
  );
};

interface IShopItemProps {
  product: IProduct
}

const ShopItem = ({product}: IShopItemProps) => {
  const classes = useStyles({});
  const theme = useTheme();
  const {image, title, id} = product;
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  return(
    <Grid container>
      <Grid item xs={12}>
        <ProgressiveImage src={image} placeholder="" rootMargin="100%" threshold={[1]} >
          {(image: string, loading: boolean) => {
            return loading ? (
              <Fade in={true} timeout={{enter: 0, exit: 2000}}>
                <Skeleton variant="rect" width={'100%'} height={'450px'}/>
              </Fade>
            ) : (
              <div className={classes.shopItemDiv} onMouseEnter={() => setShowExtraInfo(true)} onMouseLeave={() => setShowExtraInfo(false)}>
                    <div style={{backgroundImage: `url(${image})`}} className={classes.shopItemDivImage}>
                    </div>
                    {showExtraInfo && (
                      <Fade timeout={500} in={true}>
                        <Grid container 
                        className={`${classes.shopItemDivImage} ${classes.shopItemOverlay}`} 
                        justify="center"
                        alignItems="center"
                        alignContent="center">
                          <Grid item xs={12}>
                            <Typography variant="h6" align="center">
                              {title}
                            </Typography>
                          </Grid>
                          <Grid item xs={10} style={{marginTop: theme.spacing() * 4}}>
                            <ShopButton itemID={id}/>
                          </Grid>
                        </Grid>
                      </Fade>
                    )}
              </div>
            );
          }}
        </ProgressiveImage>
      </Grid>
    </Grid>
  );
}

interface IShopProps {
  products: IProduct[]
}

const Shop = ({products}:IShopProps) => {
  const classes = useStyles({});
  return (
    <Page>
      <Container maxWidth="xl">
        <Typography variant="h1" color="textPrimary" align='center'>
          shop.
        </Typography>
        <Grid container spacing={2} className={classes.root}>
          {products.map((item: IProduct) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <ShopItem product={item}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const STRAPI_URL:string = process.env.STRAPI_URL || 'http://localhost:1337';

  try {
    const {data} = await axios.get(STRAPI_URL.concat('/designs'));
    const products = data.map( (x:any) => {
      const {images, Title, _id} = x;
      return {
        id: _id,
        image: STRAPI_URL.concat(images[0].formats.thumbnail.url),
        title: Title
      };
    });
    const props = { products };
    return { props };
    
  } catch (error) {
    console.error(error);
    return {
      props:{}
    };
  }
}

export default Shop;