import React, { Component } from 'react';
import { connect } from 'react-redux';

import MarkerComponent from './Marker';

class MarkerContainer extends Component{

    render()
    {
        console.log('markers:', this.props.markers);
        return(
            <MarkerComponent markers={this.props.markers} />
        )
    }
}

const mapStateToProps = state => {
    return{
        markers: state.map.markers,
    }
}

export default connect(mapStateToProps, {})(MarkerContainer);
