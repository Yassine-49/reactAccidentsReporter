import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from './DialogComponent';
import * as dialogActions from './../../redux/actions/Dialog/actions';

class DialogContainer extends Component{

    _handleCancel = () => {
        this.props.closePromptAction();
    }

    _handleYes = () => {
        this.props.dialog.callback();
        this.props.closePromptAction();
    }

    render()
    {
        return(
            this.props.dialog.isOpen ?
            <Dialog open={this.props.dialog.isOpen}
                handleYes={this._handleYes}
                handleCancel={this._handleCancel} />
                : null
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dialog: state.dialog,
    }
}

export default connect(mapStateToProps, { ...dialogActions })(DialogContainer);
