import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="Section">Section</InputLabel>
          <Select
            native
            value={this.props.selectVal}
            onChange={this.props.onChange}
            inputProps={{
              name: 'section',
              id: 'section-native-simple',
            }}
          >
            <option value=""/>
            <option value="home">Home</option>
            <option value= "arts">Arts</option>
            <option value="automobiles">Automobiles</option>
            <option value= "books">Books</option>
            <option value= "business">Business</option>
            <option value= "fashion ">Fashion</option>
            <option value= "food">Food</option>
            <option value= "health">Health</option>
            <option value= "insider">Insider</option>
            <option value= "magazine">Magazine</option>
            <option value= "movies">Movies</option>
            <option value= "national">National</option>
            <option value= "nyregion">NY Region</option>
            <option value= "obituaries">Obituaries</option>
            <option value= "opinion">Opinion</option>
            <option value= "politics">Politics</option>
            <option value= "realestate">Real Estate</option>
            <option value= "science">Science</option>
            <option value= "sports">Sports</option>
            <option value= "sundayreview">Sunday Review</option>
            <option value= "technology">Tech</option>
            <option value= "theater">Theater</option>
            <option value= "tmagazine">T Magazine</option>
            <option value= "travel">Travel</option>
            <option value= "upshot">Upshot</option>
            <option value= "world">World</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);