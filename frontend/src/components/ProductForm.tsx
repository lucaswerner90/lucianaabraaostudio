import React, { useState, useRef } from 'react';
import { TextField, makeStyles, createStyles, Button, Typography, Grid } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width:'100%',
            '& .MuiButton-root':{
                float:'right',
                backgroundColor:'#DA2E5E',
                color: '#e6e6e6'
            },
            '& .MuiTypography-h6':{
                fontSize: '1.5rem'
            }
        },
    }),
);

const ProductForm = ({product}:{product:IProduct}) => {
    const classes = useStyles({});
    const [loading, setLoading] = useState<boolean>(false);
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const formRef = useRef(null);
    const clearForm = () => {
        setDescription('');
        setEmail('');
        setName('');
    };
    const submitForm = async (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const body = {
            design: product.id,
            name,
            email,
            description
        };
        try {
            await axios.post((process.env.NEXT_PUBLIC_STRAPI_URL || '').concat('/product-request-infos'),body);
            clearForm();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form ref={formRef} className={classes.root} autoComplete="off" onSubmit={submitForm}>
            <Grid container spacing={2}>
                <Grid item xs={12}>    
                    <Typography variant="h6" component="h2">
                        Get your own
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField value={email} required onChange={(e) => setEmail(e.target.value)} label="Email" type="email" autoFocus fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required value={name} onChange={(e) => setName(e.target.value)} inputProps={{maxLength: 50}} type="text" fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField required value={description} onChange={(e) => setDescription(e.target.value)} inputProps={{maxLength: 1000}} label="Description" variant="outlined" multiline fullWidth rows={5} rowsMax={5} />
                    <Typography variant="body2" color="textSecondary" align="right">
                        {description.length}/1000
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {loading ? 
                        <Typography align="right" variant="body1" color="primary">Sending email...</Typography> : 
                        <Button type="submit" variant="outlined" color="primary">Send request</Button>
                    }
                    
                </Grid>
            </Grid>
            
        </form>
    )
}

export default ProductForm;
