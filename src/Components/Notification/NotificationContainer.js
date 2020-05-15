import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as formActions from './../../redux/actions/Form/actions';
import * as userActions from './../../redux/actions/User/actions';
import Notification from './Notification';

class NotificationContainer extends Component{

    _handleClose = () => {
        this.props.clearErrorsAction();
        this.props.clearUserErrorsAction();
    }

    render()
    {
        if(this.props.form.errors)
        {
            return <Notification open={true}
                        handleClose={this._handleClose}
                        errorType={this.props.form.errors.name}
                        message={this.props.form.errors.message} />
        }
        if(this.props.user.errors)
        {
            return <Notification open={true}
                        handleClose={this._handleClose}
                        errorType={this.props.user.errors.name}
                        message={this.props.user.errors.message} />
        }
        return null;
    }
}

const mapStateToProps = state => {
    return{
        form: state.form,
        user: state.user,
    }
}

export default connect(mapStateToProps, { ...formActions, ...userActions })(NotificationContainer);
