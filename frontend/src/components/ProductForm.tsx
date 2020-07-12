import React, { useState, useRef } from 'react';
import { TextField, makeStyles, createStyles, Button, Typography, Grid, Snackbar } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import axios from 'axios';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

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

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductForm = ({product}:{product:IProduct}) => {
    const classes = useStyles({});
    const [open, setOpen] = useState<boolean>(false);
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
    const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const submitForm = async (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const body = {
            product,
            name,
            email,
            description
        };
        try {
            await axios.post('/api/product-request/send', body);
            setOpen(true);
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
                    <TextField required value={name} onChange={(e) => setName(e.target.value)} inputProps={{ maxLength: 50 }} type="text" fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField required value={description} onChange={(e) => setDescription(e.target.value)} inputProps={{ maxLength: 1000 }} label="Description" variant="outlined" multiline fullWidth rows={5} rowsMax={5} />
                    <Typography variant="body2" color="textSecondary" align="right">
                        {description.length}/1000
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        endIcon={loading ? null : <SendRoundedIcon />}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send request'}
                    </Button>

                    <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'right'}} open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Your request has been sent!
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
            
        </form>
    );
}

export default ProductForm;
