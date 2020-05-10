import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from './DialogComponent';
import * as dialogActions from './../../redux/actions/Dialog/actions';

class DialogContainer extends Component{

    _handleCancel = () => {
        console.log('No');
        this.props.closePromptAction();
    }

    _handleYes = () => {
        console.log('Yes');
        this.props.dialog.callback();
        this.props.closePromptAction();
    }

    render()
    {
        console.log('props:', this.props);
        return(
            <Dialog open={this.props.dialog.isOpen}
                handleYes={this._handleYes}
                handleCancel={this._handleCancel} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dialog: state.dialog,
    }
}

export default connect(mapStateToProps, { ...dialogActions })(DialogContainer);
