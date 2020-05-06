import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './../../redux/actions/User/actions';
import * as mapActions from './../../redux/actions/Map/actions';

import LoginForm from './LoginForm';
import history from './../../Helpers/history';

class LoginFormContainer extends Component{

    constructor(props)
    {
        super(props);
        this._handleLogin = this._handleLogin.bind(this);
    }

    async _handleLogin(user) {
        const res = await this.props.loginAction(user);
        if(!res.data.message)
            history.push('/');

        const response = await this.props.getDataAction(this.props.user.token);

        return res;
    }

    _handleRegister()
    {
        history.push('/register');
    }

    render()
    {
        return(
            <LoginForm handleLogin={this._handleLogin}
                handleRegister={this._handleRegister} />
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps, { ...userActions, ...mapActions })(LoginFormContainer);
