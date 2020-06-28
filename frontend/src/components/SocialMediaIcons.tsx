import Facebook from '../assets/svg/facebook.svg';
import Instagram from '../assets/svg/instagram.svg';
import Whatsapp from '../assets/svg/whatsapp.svg';
import theme from '../theme';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
        '&:hover':{
            fill: theme.palette.primary.main,
        }
    },
  }),
);

interface ISocialMediaIconsProps{
    width:number,
    height: number,
    instagram: string,
    facebook: string,
    whatsapp: string
};

export default ({width, height, facebook, instagram, whatsapp}:ISocialMediaIconsProps) => {
    const classes = useStyles({});
    return (
        <Grid container spacing={4} justify='center'>
            <Grid item>
                <a href={facebook} target='_blank'>
                    <Facebook className={classes.icon} width={width} height={height} fill={theme.palette.text.secondary} />
                </a>
            </Grid>
            <Grid item>
                <a href={instagram} target='_blank'>
                    <Instagram className={classes.icon} width={width} height={height} fill={theme.palette.text.secondary}/>
                </a>
            </Grid>
            <Grid item>
                <a href={whatsapp} target='_blank'>
                    <Whatsapp className={classes.icon} width={width} height={height} fill={theme.palette.text.secondary}/>
                </a>
            </Grid>
        </Grid>
    );
};