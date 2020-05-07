import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapGl, { setRTLTextPlugin } from 'react-map-gl';

import * as mapActions from './../../redux/actions/Map/actions';
import * as formActions from './../../redux/actions/Form/actions';
import MarkerContainer from '../Marker/MarkerContainer';
import PopupContainer from '../Popup/PopupContainer';

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

    _setViewport = viewport => {
        this.props.setViewportAction(viewport);
    }

    _handleMapClick = lngLat => {
        if(this.props.user.isLoggedIn)
        {
            this.props.setDataAction({
                latitude: lngLat[1],
                longitude: lngLat[0],
            });
            this.props.openDialogAction();
        }
    }

    render()
    {
        return(
            <ReactMapGl mapboxApiAccessToken={TOKEN}
                mapStyle={STYLE}
                {...this.props.viewport}
                getCursor={() => 'default'}
                onViewportChange={ viewport => this._setViewport(viewport) }
                onClick={(e) => this.props.popup.isOpen ? this.props.setPopupAction(false) : this._handleMapClick(e.lngLat) }
            >
                <MarkerContainer />
                <PopupContainer />
            </ReactMapGl>
        )
    }
}

const mapStateToProps = state => {
    return {
        viewport: state.map.viewport,
        form: state.form,
        user: state.user,
        popup: state.map.popup,
    }
}

export default connect(mapStateToProps, { ...mapActions, ...formActions })(Map);
