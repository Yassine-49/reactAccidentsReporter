import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopupComponent from './PopupComponent';
import * as mapActions from './../../redux/actions/Map/actions';

class PopupContainer extends Component{

    _handleClose = () => {
        this.props.setPopupAction(false);
    }

    render()
    {
        return(
            this.props.popup.isOpen ? <PopupComponent data={this.props.popup} handleClose={this._handleClose} /> : null
        )
    }
}

const mapStateToProps = state => {
    return{
        popup: state.map.popup,
    }
}

export default connect(mapStateToProps, { ...mapActions })(PopupContainer);
