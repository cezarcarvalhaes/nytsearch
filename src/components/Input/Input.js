import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';


const Input = props => (
<FormControl fullWidth>
  <TextField 
  name={props.name} 
  onChange={props.onChange} 
  id="search-term" 
  label="Filter" 
  defaultValue = "Home"
  />
</FormControl>
);

export default Input;
