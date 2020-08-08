import React from 'react';
import Button from '@material-ui/core/Button';

export default function PressButton( { handlePress } ) {
 
  return (
    <Button variant="contained" color="primary" onClick = { handlePress }>
      Select
    </Button>
  );
}

