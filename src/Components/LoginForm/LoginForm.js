import React, { Fragment } from 'react';
import * as yup from 'yup';

import { Formik } from 'formik';
import {
    Container,
    TextField,
    Button,
} from '@material-ui/core';
import { useStyles } from './styles';

const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(8, 'password must be at least 8 characters long!'),
});

const LoginForm = (props) => {

    const classes = useStyles();

    return(
        <Fragment>
        <Container maxWidth="sm">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={ async (data) => {
                    try {
                        await props.handleLogin(data);
                    } catch (error) {
                        console.log('error:', error);
                    }
                }}
                validationSchema={loginSchema}
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
                        <form onSubmit={handleSubmit}>
                            <TextField className={classes.TextField}
                                id="username"
                                label="Username"
                                helperText={ errors.username && touched.username ? `*${errors.username}` : '' }
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                error={ errors.username && touched.username }
                                fullWidth />
                            <TextField className={classes.TextField}
                                id="password"
                                label="Password"
                                helperText={ errors.password && touched.password ? `*${errors.password}` : '' }
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                error={ errors.password && touched.password }
                                type="password"
                                fullWidth />
                            <div className={classes.ButtonContainer}>
                                <Button className={classes.Button}
                                    color="primary"
                                    type="submit"
                                    variant="contained">Login</Button>
                                <Button className={classes.Button}
                                    color="primary"
                                    onClick={props.handleRegister}
                                    variant="outlined">Register</Button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </Container>
        </Fragment>
    )
}

export default LoginForm;
