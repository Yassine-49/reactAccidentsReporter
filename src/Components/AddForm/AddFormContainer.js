import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from './AddForm';
import * as formActions from './../../redux/actions/Form/actions';
import * as mapActions from './../../redux/actions/Map/actions';

class AddFormContainer extends Component{

    _handleCancelButton = () => {
        this.props.closeDialogAction();
    }

    _handleSaveButton = async (values) => {
        await this.props.postFormAction(values, this.props.user.token);
        // TODO: handle error
        await this.props.getDataAction(this.props.user.token);
        this.props.closeDialogAction();
    }

    _handleEditButton = async (values) => {
        await this.props.updateFormAction(values, this.props.user.token);
        // TODO: handle error
        await this.props.getDataAction(this.props.user.token);
        this.props.closeDialogAction();
    }

    render()
    {
        return(
            // TODO: handle dialog state
            this.props.form.isOpen
                ? <AddForm open={this.props.form.isOpen}
                    values={this.props.form.data}
                    id={this.props.form.data.id}
                    handleCancelButton={this._handleCancelButton}
                    handleSaveButton={this._handleSaveButton}
                    handleEditButton={this._handleEditButton} />
                : null
        )
    }
}

const mapStateToProps = state => {
    return{
        form: state.form,
        user: state.user,
    }
}

export default connect(mapStateToProps, { ...formActions, ...mapActions })(AddFormContainer);
