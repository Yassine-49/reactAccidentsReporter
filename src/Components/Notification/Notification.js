import React from 'react';

import {
    Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props)
{
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Notification(props)
{
  return(
    <Snackbar open={props.open}
      autoHideDuration={3000}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
      <Alert onClose={props.handleClose} severity={ props.errorType === 'Error' ? 'error' : 'success' }>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default Notification;