import React, { Component } from 'react';
import { connect } from 'react-redux';

import MarkerComponent from './Marker';
import * as mapActions from './../../redux/actions/Map/actions';

class MarkerContainer extends Component{

    _handleMarkerClick = (id, lngLat) => {
        this.props.setPopupAction(true, id, lngLat);
    }

    render()
    {   
        return(
            <MarkerComponent markers={this.props.markers} handleMarkerClick={this._handleMarkerClick} />
        )
    }
}

const mapStateToProps = state => {
    return{
        markers: state.map.markers,
    }
}

export default connect(mapStateToProps, { ...mapActions })(MarkerContainer);
