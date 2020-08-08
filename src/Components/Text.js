import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import WatchLater from '@material-ui/icons/WatchLater';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2)
  },
}));

export default function Text( { name, myChangeHandler } ) {
  const classes = useStyles();

  return (
      <div className = { classes.margin }>
        <Grid container spacing = { 1 } alignItems = "flex-end">
          <br/>
          <Grid item>
            <WatchLater style = {{ fontSize: 40 } }/>
          </Grid>
          <Grid item>
            <TextField 
            name = { name } 
            label="Enter Time (in seconds) : " 
            onChange = { myChangeHandler } 
              />
          </Grid>
        </Grid>
      </div>
  );

}