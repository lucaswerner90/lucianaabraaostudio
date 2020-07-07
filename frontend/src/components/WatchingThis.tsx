import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

const WatchingThis = () => {
    const number = Math.round((Math.random()*10))+1;
    return (
        <Grid container justify="center">
            <VisibilityIcon color="disabled" style={{marginRight:'10px', width:'20px', height:'20px'}}/> 
            <Typography variant="body2" color="textSecondary" className="watching-this">
                <span>{number} watching this now</span>
            </Typography>
        </Grid>
    )
}

export default WatchingThis;
