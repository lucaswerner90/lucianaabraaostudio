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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    borderRadius: 20,
    padding: 20,
    background: '#212121',
    color: theme.palette.text.primary,
  },
  media: {
    backgroundColor:theme.palette.common.black,
    borderRadius: 0,
    height:'200px',
    backgroundSize:'100%',
    transition:'background .2s ease-in',
    '&:hover':{
      backgroundSize:'120%'
    }
  },
}));


const ShopChardItem= React.memo(({title, description, image, id}:IShopCardItemProps) => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={image}
      />
      <CardContent>
          <Typography variant="h6" align="center" color="textPrimary">
            {title}
          </Typography>
          <Box marginTop={2}>
            <Typography variant="body2" align="center">
              {description}
            </Typography>
          </Box>
        <Box marginTop="20px" justifyItems="center" width={"100%"} textAlign="center">
          <Button variant="outlined" color="primary" onClick={() => Router.push('/product/[id]',`/product/${id}`)} >See more</Button>
        </Box>
      </CardContent>
    </Card>
  );
});
export default ShopChardItem;