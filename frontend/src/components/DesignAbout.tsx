import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
      flexWrap: 'nowrap',
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
    designer: string
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
            <img src={tile.image} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
