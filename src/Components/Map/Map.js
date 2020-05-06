import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapGl, { setRTLTextPlugin } from 'react-map-gl';

import * as mapActions from './../../redux/actions/Map/actions';
import * as formActions from './../../redux/actions/AddForm/actions';
import MarkerContainer from '../Marker/MarkerContainer';

const TOKEN = process.env.REACT_APP_TOKEN;
const STYLE = process.env.REACT_APP_STYLE;
setRTLTextPlugin(
    // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    // lazy: only load when the map first encounters Hebrew or Arabic text
    true
);

class Map extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            viewport: {
                width: 900,
                height: 600,
                latitude: 32.3008,
                longitude: -9.2272,
                zoom: 12,
                maxZoom: 17,
                minZoom: 2,
            }
        }
    }

    setViewport = viewport => {
        this.setState({
            viewport
        })
    }

    handleMapClick = lngLat => {
        console.log('lngLat:', lngLat);
        if(this.props.user.isLoggedIn)
        {
            this.props.setDataAction({
                latitude: lngLat[1],
                longitude: lngLat[0],
            });
            this.props.openDialogAction();
        }
        //console.log(this.props.user.isLoggedIn ? this.props.openDialogAction() : 'not logged in!')
    }

    render()
    {
        return(
            <ReactMapGl mapboxApiAccessToken={TOKEN}
                mapStyle={STYLE}
                {...this.state.viewport}
                getCursor={() => 'default'}
                onViewportChange={ viewport => this.setViewport(viewport) }
                onClick={(e) => this.handleMapClick(e.lngLat) }
            >
                <MarkerContainer />
            </ReactMapGl>
        )
    }
}

const mapStateToProps = state => {
    return {
        form: state.addForm,
        user: state.user,
    }
}

export default connect(mapStateToProps, { ...mapActions, ...formActions })(Map);
