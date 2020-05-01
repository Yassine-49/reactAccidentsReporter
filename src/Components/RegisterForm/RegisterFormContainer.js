import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions/User/actions';

import RegisterForm from './RegisterForm';
import history from './../../Helpers/history';

class RegisterFormContainer extends Component{

    constructor(props)
    {
        super(props);
        this._handleRegister = this._handleRegister.bind(this);
    }

    async _handleRegister(data)
    {
        const res = await this.props.registerAction(data);
        if(!res.data.message)
            history.push('/');
        return res;
    }

    _handleLogin()
    {
        history.push('/login');
    }

    render()
    {
        return(
            <RegisterForm handleRegister={this._handleRegister} handleLogin={this._handleLogin} />
        )
    }
}

const mapStateToProps = state => {
    return{
    }
}

export default connect(mapStateToProps, { ...actions })(RegisterFormContainer);
