import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './../../redux/actions/User/actions';
import * as mapActions from './../../redux/actions/Map/actions';

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

    async componentWillMount() {
        if(this.props.user.isLoggedIn)
        {
            await this.props.getDataAction(this.props.user.token);
            history.push('/');
        }
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
        user: state.user,
    }
}

export default connect(mapStateToProps, { ...userActions, ...mapActions })(RegisterFormContainer);
