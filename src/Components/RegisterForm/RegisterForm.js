import React, { Fragment } from 'react';
import * as yup from 'yup';

import { Formik } from 'formik';
import {
    Container,
    TextField,
    Button,
    Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const loginSchema = yup.object().shape({
    email: yup.string().required().email('invalid email'),
    username: yup.string().required(),
    password: yup.string().required().min(8, 'password must be at least 8 characters long!'),
});

const RegisterForm = (props) => {

    const classes = useStyles();
    let loginError = '';

    return(
        <Fragment>
        <Container maxWidth="sm">
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password: '',
                }}
                onSubmit={ async (data) => {
                    try {
                        const res = await props.handleRegister(data);
                        loginError = `*${res.data.message}`;
                    } catch (error) {
                        loginError = `*${error}`;
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
                    }
                    )=>(
                        <form onSubmit={handleSubmit}>
                            <TextField className={classes.TextField}
                                id="email"
                                label="Email"
                                helperText={ errors.email && touched.email ? `*${errors.email}` : '' }
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant="outlined"
                                error={ errors.email && touched.email }
                                fullWidth />
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
                                    variant="contained">Register</Button>
                                <Button className={classes.Button}
                                    color="primary"
                                    onClick={props.handleLogin}
                                    variant="outlined">login</Button>
                            </div>
                            <Typography className={classes.ErrorText}
                                variant="caption"
                                color="error"
                                display="block">
                                { loginError }
                            </Typography>
                        </form>
                    )
                }
            </Formik>
        </Container>
        </Fragment>
    )
}

export default RegisterForm;
