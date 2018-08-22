import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Paper } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Details from '@material-ui/icons/Details';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';

const styles = theme => ({
  card: {
    maxWidth: 1000
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  actions: {
    display: 'flex',
    padding: '0',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  primaryText: {
    color: '#444444',
  },
  danger: {
    color: 'red',
    fontWeight: 'bold'
  },
  icon: {
    verticalAlign: 'middle',
  }
});

class Card extends React.Component {
  state = { 
    expanded: false,
    favOpen: false,
    modalOpen: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    //Boolean to conditionally render alerts for when a credit card is expired

    return (
      <div>
        <Paper className={classes.card}>
        <CardHeader 
          title={this.props.title}
          subheader={this.props.date}             
          action={
                <Tooltip title = "View Remittances">
                  <IconButton onClick = {this.props.toggleModal}>
                    <Details />
                  </IconButton>
                </Tooltip>
              }
        />
        <CardMedia
          className={classes.media}
          image={"https://nytimes.com/" + this.props.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="body1">
              {this.props.snippet}
        </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <Tooltip title = "View Payment Info">
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton> 
            </Tooltip>
        </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>

            </CardContent>
          </Collapse>
        </Paper>
      </div>
    );
  }
}
 
Card.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Card);