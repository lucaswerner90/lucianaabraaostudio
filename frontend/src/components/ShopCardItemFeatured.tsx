import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Button, Box, Typography } from '@material-ui/core';
import Router from 'next/router';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    margin: 'auto',
    borderRadius: 20,
    padding: 0,
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow:theme.shadows[4],
    overflow:'initial'
  },
  media: {
    backgroundColor:theme.palette.common.black,
    borderRadius: 0,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    height:'380px',
    backgroundSize:'100%',
    transition:'background .2s ease-in',
    '&:hover':{
      backgroundSize:'80%'
    }
  },
}));

const ShopChardItemFeatured = React.memo(({title, description, image, id}:IShopCardItemProps) => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <Box position="absolute" width="40px" height="40px" top="-15px" right="-15px" zIndex="20" boxShadow={theme.shadows[10]}>
        <div style={{
          width:'100%',
          height:'100%',
          borderRadius:'50px',
          backgroundColor:theme.palette.primary.main
        }}></div>
      </Box>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={image}
      />
      <CardContent>
          <Typography variant="h5" className="shopTitle" align="center" color="textPrimary">
            {title}
          </Typography>
          <Box marginTop={2}>
            <Typography variant="body2" align="center">
              {description}
            </Typography>
          </Box>
        <Box marginTop="20px">
          <Button variant="outlined" color="primary" onClick={() => Router.push('/product/[id]',`/product/${id}`)}  fullWidth>See more</Button>
        </Box>
      </CardContent>
    </Card>
  );
});
export default ShopChardItemFeatured;