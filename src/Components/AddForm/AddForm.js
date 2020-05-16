import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

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

const entrySchema = yup.object().shape({
    title: yup.string().required('marker must have a title'),
    description: yup.string().required('please be kind enough to provide a description.'),
    numberOfInjuries: yup.number(),
    isResolved: yup.boolean(),
});

export default function AddForm(props)
{
    return(
            <Formik
                initialValues={{
                    title: props.values ? props.values.title : 'Enter a Title',
                    description: props.values ? props.values.description : 'Enter a Description',
                    numberOfInjuries: props.values ? props.values.numberOfInjuries : 0,
                    isResolved: props.values ? props.values.isResolved : false,
                    latitude: props.values ? props.values.latitude : null,
                    longitude: props.values ? props.values.longitude : null,
                }}
                onSubmit={
                    data => props.id ? props. handleEditButton({ id: props.id, ...data }) : props.handleSaveButton(data)
                }
                validationSchema={entrySchema}
            >
                {
                    ({
                        values,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        errors,
                        touched,
                    }) => (
                        <Dialog open={props.open}
                            onClose={props.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">{props.id ? 'Edit:' : 'Add new:'}</DialogTitle>
                        <form onSubmit={ handleSubmit }>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="title"
                                    label="Title"
                                    helperText={ errors.title && touched.title ? `*${errors.title}` : '' }
                                    defaultValue={values.title}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={ errors.title && touched.title }
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="description"
                                    label="Description"
                                    helperText={ errors.description && touched.description ? `*${errors.description}` : '' }
                                    defaultValue={values.description}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={ errors.description && touched.description }
                                    multiline
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="numberOfInjuries"
                                    label="Number of injuries"
                                    defaultValue={values.numberOfInjuries}
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                />
                                <FormControlLabel
                                    id="isResolved"
                                    label="Resolved"
                                    control={
                                        <Checkbox checked={values.isResolved}
                                            name="isResolved"
                                            color="secondary"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    }
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={props.handleCancelButton} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    { props.id ? 'Edit' : 'Save' }
                                </Button>
                            </DialogActions>
                        </form>
                </Dialog>
                    )
                }
            </Formik>
    )
}
