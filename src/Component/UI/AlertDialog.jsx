
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { PureComponent } from 'react'

export default class AlertDialog extends PureComponent {
  state = {
    open:true
  }
  handleClickOpen = () => {
    this.setState({open:true});
  };

   handleClose = () => {
    this.props.handleRemoveMessage();
    this.setState({open:false});
  };
render(){
  return (
    <div>

      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thông báo !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <p class="text-primary">{this.props.content}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={this.handleClose} autoFocus>
          <p class="text-success">  Agree</p>
          
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}