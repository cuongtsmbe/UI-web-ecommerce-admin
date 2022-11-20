import React, { PureComponent } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default class NativePickers extends PureComponent {
  render(){
  return (
 <Stack component="form" noValidate spacing={3}>   
      <TextField
        id="datetime-local"
        label={this.props.NameTitle}
        type="datetime-local"
        defaultValue="0000-00-00T00:00"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) =>this.props.parentCallback(this.props.stateName,e.target.value)}
      />
  </Stack>
    
  )
      }
}

//tham khao :  https://mui.com/x/react-data-grid/getting-started/