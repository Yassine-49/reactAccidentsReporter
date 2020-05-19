import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as mapActions from './../../redux/actions/Map/actions';
import Map from './Map';

class MapContainer extends Component{

    async componentWillMount()
    {
        this.props.user.isLoggedIn && await this.props.getDataAction(this.props.user.token);
    }

    render()
    {
        return(
            <Map />
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
        markers: state.map.markers,
    }
}

export default connect(mapStateToProps, { ...mapActions })(MapContainer);
