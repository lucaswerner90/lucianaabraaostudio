import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
        flex: 1,
    },
    formField:{
        width: '100%',
        marginTop: theme.spacing() * 2
    },
    buttonField:{
        width: '100%',
        marginTop: theme.spacing() * 4,
    }
  }),
);

const LoginForm = () => {
    const classes = useStyles({});
    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField className={classes.formField} color="secondary" required id="email" label="Email" type="email" />
            <TextField className={classes.formField} color="secondary" required id="password" label="Password" type="password" />
            <Button className={classes.buttonField} color="primary" variant="outlined">
                Login
            </Button>
        </form>
    )
}

export default LoginForm;
