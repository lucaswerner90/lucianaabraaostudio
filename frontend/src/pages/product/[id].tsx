import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Box } from '@material-ui/core';
import Page from '../page';
import { GetServerSideProps } from 'next';
import axios from '../../axios';
import ProgressiveImage from 'react-progressive-graceful-image';
import theme from '../../theme';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ProductForm from '../../components/ProductForm';

const useStyles = makeStyles(() => {
    return ({
        section:{
            height:'90vh',
        }
    });
});

interface IProduct {
    thumbnail: string,
    image: string,
    title: string,
    description: string,
    id: string
    
}
interface IProductProps {
    product: IProduct
}

const Product = ({product}:IProductProps) => {
    const classes = useStyles({});
    return (
        <Page>
            <Container maxWidth="xl" style={{margin:'40px 0'}}>
                <Grid container justify="center" spacing={8}>
                    <Grid item xs={12} lg={6} className={classes.section}>
                            <ProgressiveImage src={product.image} placeholder={product.thumbnail}>
                                {(_src: string | undefined) => {
                                    return <Box boxShadow={theme.shadows[10]} width="100%" height="100%"><div style={{
                                        backgroundImage:`url(${product.image})`,
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        width:'100%',
                                        height:'100%'
                                    }}/></Box>;
                                }}
                            </ProgressiveImage>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Grid container justify="center" alignContent="center" spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant="h1" color="textPrimary" align='center' style={{textShadow: theme.shadows[4]}}>
                                    {product.title}
                                </Typography>
                                <Grid container justify="center" spacing={2} style={{marginTop:'20px'}}>
                                    <VisibilityIcon color="disabled" style={{marginRight:'10px', width:'20px', height:'20px'}}/> 
                                    <Typography variant="body2" color="textSecondary" className="watching-this">
                                        <span>{Math.round((Math.random()*10))+1} watching this now</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" align="center">
                                    {product.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box marginTop={theme.spacing(1)}>
                                    <ProductForm/>
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