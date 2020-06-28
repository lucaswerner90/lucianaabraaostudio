import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProgressiveImage from 'react-progressive-graceful-image';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    gridList: {
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
    //   color: theme.palette.primary,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
    },
    image:{

    }
  }),
);

export interface IDesign {
    title: string,
    image: string,
    designer: string,
    placeholderImg: string
}

export interface IDesignAboutProps {
    data:IDesign[]
}
export default function DesignAbout({data}:IDesignAboutProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {data.map((tile, index) => (
          <GridListTile key={index} rows={4} className={classes.image} >
            <ProgressiveImage src={tile.image} placeholder={tile.placeholderImg}>
              {(src: string | undefined) => {
                return <img src={src} height="100%" alt={tile.title} />;
              }}
            </ProgressiveImage>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
