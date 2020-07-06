import React, { useState } from 'react';
import { TextField, makeStyles, createStyles, Button, Typography, Grid } from '@material-ui/core';


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

const ProductForm = () => {
    const classes = useStyles({});
    const [description, setDescription] = useState('');
    const submitForm = (e:React.FormEvent) => {
        e.preventDefault();
        console.log('submitForm...');
    };
    return (
        <form className={classes.root} autoComplete="off" onSubmit={submitForm}>
            <Grid container spacing={4}>
                <Grid item>    
                    <Typography variant="h6" component="h2">
                        Get your own
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">
                        Each piece is unique, so are your needs.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required label="Email" type="email" autoFocus fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required inputProps={{maxLength: 50}} type="text" fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField required onChange={(e) => setDescription(e.target.value)} inputProps={{maxLength: 1000}} label="Description" variant="outlined" multiline fullWidth rows={5} rowsMax={5} />
                    <Typography variant="body2" color="textSecondary" align="right">
                        {description.length}/1000
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" color="primary">Send request</Button>
                </Grid>
            </Grid>
            
        </form>
    )
}

export default ProductForm;
