import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Box, Fade } from '@material-ui/core';
import Page from '../page';
import { GetServerSideProps } from 'next';
import axios from '../../axios';
import ProgressiveImage from 'react-progressive-graceful-image';
import theme from '../../theme';
import ProductForm from '../../components/ProductForm';
import Skeleton from '@material-ui/lab/Skeleton';
import WatchingThis from '../../components/WatchingThis';

const useStyles = makeStyles(() => {
    return ({
        section:{
            height:'90vh',
        }
    });
});

export const Product = ({product}:IProductProps) => {
    const classes = useStyles({});
    const ProductImage = (
    <Fade in={true} timeout={2000}>
        <Box boxShadow={theme.shadows[10]} width="100%" height="100%"><div style={{
        backgroundImage:`url(${product.image})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100%',
        height:'100%'
        }}/>
        </Box>
    </Fade>);

    return (
        <Page>
            <Container maxWidth="xl" style={{margin:'40px 0'}}>
                <Grid container justify="center" spacing={8}>
                    <Grid item xs={12} lg={6} className={classes.section}>
                            <ProgressiveImage src={product.image} placeholder={product.thumbnail}>
                                {(_src: string | undefined, loading:boolean) => {
                                    return loading ? <Skeleton variant="rect" width={'100%'} height={'100%'} /> : ProductImage
                                }}
                            </ProgressiveImage>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Grid container justify="center" alignContent="center" spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant="h1" className="product-title" color="textPrimary" align='center' style={{textShadow: theme.shadows[4]}}>
                                    {product.title}
                                </Typography>
                                <WatchingThis />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" align="center">
                                    {product.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box marginTop={theme.spacing(0)}>
                                    <ProductForm product={product}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};


export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        const API_URL = process.env && process.env.NEXT_PUBLIC_STRAPI_URL || '';
        const { data } = await axios.get(`/designs/${context.query.id}`);
        const product = {
            featured: data.featured,
            title: data.Title,
            description: data.Description,
            id: data._id,
            image: API_URL.concat(data.images[0].formats.small.url),
            thumbnail: API_URL.concat(data.images[0].formats.thumbnail.url)
        };
        return { 
            props:{
                product
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {}
        };
    }
}

export default Product;