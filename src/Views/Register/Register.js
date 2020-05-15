import React from 'react';

import RegisterFormContainer from '../../Components/RegisterForm/RegisterFormContainer';
import NotificationContainer from '../../Components/Notification/NotificationContainer';

function Register(props)
{
    return(
        <div>
            <NotificationContainer />
            <RegisterFormContainer />
        </div>
    )
}

export default Register;
