import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as mapActions from './../../redux/actions/Map/actions';
import * as formActions from './../../redux/actions/Form/actions';
import Sidebar from './Sidebar';

class SidebarContainer extends Component{

    _handleItemClick = (lngLat) => {
        this.props.setViewportAction({
            latitude: lngLat[1],
            longitude: lngLat[0],
        });
    }

    _handleEditClick = (id) => {
        console.log('edit:', id);
    }

    _handleDeleteClick = async (id) => {
        console.log('delete:', id);
        // TODO: prompt are you sure
        const res = await this.props.deleteItemAction({ id }, this.props.user.token);
        console.log('res:', res);
        // TODO: handle error
        await this.props.getDataAction(this.props.user.token);
    }

    render()
    {
        return(
            <Sidebar user={this.props.user}
                markers={this.props.markers}
                handleItemClick={this._handleItemClick}
                handleEditClick={this._handleEditClick}
                handleDeleteClick={this._handleDeleteClick} />
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
        markers: state.map.markers,
    }
}

export default connect(mapStateToProps, { ...mapActions, ...formActions })(SidebarContainer);
