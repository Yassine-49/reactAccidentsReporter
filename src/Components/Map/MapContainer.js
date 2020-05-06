import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from './Map';

class MapContainer extends Component{

    render()
    {
        return(
            <Map />
        )
    }
}

const mapStateToProps = state => {
    return{
    }
}

export default connect(mapStateToProps, { })(MapContainer);
