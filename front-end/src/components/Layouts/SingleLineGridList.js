import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


 const tileData = [
    {
      img: require("../images/cat-2083492_1280.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/breakfast.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/burgers.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/camera.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/honey.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/morning.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/plant.jpg"),
      title: 'Image',
      author: 'author',
    },
    {
      img: require("../images/vegetables.jpg"),
      title: 'Image',
      author: 'author',
    },
 ];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
