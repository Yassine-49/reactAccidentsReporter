import React from 'react';
import LoginFormContainer from '../../Components/LoginForm/LoginFormContainer';
import NotificationContainer from '../../Components/Notification/NotificationContainer';

function Login(props)
{
    return(
        <div>
            <NotificationContainer />
            <LoginFormContainer />
        </div>
    )
}

export default Login;
