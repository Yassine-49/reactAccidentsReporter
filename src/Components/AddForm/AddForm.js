import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControlLabel,
    Checkbox,
    TextField,
    Button
} from '@material-ui/core';

export default function AddForm(props)
{
    const [values, setValues] = React.useState({
        title: props.values ? props.values.title : 'Enter a Title',
        description: props.values ? props.values.description : 'Enter a Description',
        numberOfInjuries: props.values ? props.values.numberOfInjuries : 0,
        isResolved: props.values ? props.values.isResolved : false,
        latitude: props.values ? props.values.latitude : null,
        longitude: props.values ? props.values.longitude : null,
    });
    
    return(
        <Dialog open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">{props.marker ? 'Edit:' : 'Add new:'}</DialogTitle>
            <form onSubmit={(e) => props.handleSaveButton(e, values)}>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="title"
                        label="Title"
                        defaultValue={values.title}
                        variant="outlined"
                        onInput={e => setValues({...values, title: e.target.value})}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        defaultValue={values.description}
                        variant="outlined"
                        onInput={e => setValues({...values, description: e.target.value})}
                        multiline
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="numberOfInjuries"
                        label="Number of injuries"
                        defaultValue={values.numberOfInjuries}
                        variant="outlined"
                        onInput={e => setValues({...values, numberOfInjuries: e.target.value})}
                        fullWidth
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            id="isResolved"
                            checked={values.isResolved}
                            name="isChecked"
                            color="secondary"
                            onChange={e => setValues({...values, isResolved: e.target.checked})}
                        />
                        }
                        label="Resolved"
                    />
                </DialogContent>
                <DialogActions>
                    {props.marker ?
                    <Button onClick={() => props.handleDelete(props.marker.id)} color="secondary">
                        Delete
                    </Button>
                    : null
                    }
                    <Button onClick={props.handleCancelButton} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
