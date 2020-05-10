import React from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogComponent(props) {
  
    const open = props.open;

  return (
    <Dialog open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleCancel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">
            Delete!
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete this marker?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleCancel} color="secondary">
                No
            </Button>
            <Button onClick={props.handleYes} color="primary">
                Yes
            </Button>
        </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;