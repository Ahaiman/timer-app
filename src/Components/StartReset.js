
import React from "react";
import Button from '@material-ui/core/Button';

export default function StartReset(props) {
  return (
        <div>
            <view>
                <Button variant="outlined" color="primary" className="button" onClick = {props.reset}> 
                Reset 
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="outlined" color="primary"  onClick = {props.toggle}> {props.isActive ? 'Pause' : 'Start'} </Button>
            </view>
            <br/>
            <Button variant="contained" color="secondary" onClick = {props.refresh}> Change Time </Button>
            </div>)
}
