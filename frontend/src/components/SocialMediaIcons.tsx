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

export default ({size, facebook, instagram, whatsapp}:ISocialMediaIconsProps) => {
    const classes = useStyles({});
    const message = 'Hi Luciana! I am contacting you through the web!';
    return (
        <Grid container spacing={4} alignItems="center" alignContent="center">
            <Grid item>
                <a href={facebook} target='_blank'>
                    <Facebook className={classes.icon} width={size} height={size} fill={theme.palette.text.secondary} />
                </a>
            </Grid>
            <Grid item>
                <a href={instagram} target='_blank'>
                    <Instagram className={classes.icon} width={size} height={size} fill={theme.palette.text.secondary} />
                </a>
            </Grid>
            <Grid item>
                <a href={`https://wa.me/${whatsapp}?text=${encodeURI(message)}`} target='_blank'>
                    <Whatsapp className={classes.icon} width={size} height={size} fill={theme.palette.text.secondary} />
                </a>
            </Grid>
        </Grid>
    );
};