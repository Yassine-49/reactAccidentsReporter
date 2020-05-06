import React from 'react';
import { Popup } from 'react-map-gl';

function PopupComponent(props)
{
    return(
        <Popup latitude={props.data.latitude}
            longitude={props.data.longitude}
            onClose={props.handleClose}
            closeButton={true}
            closeOnClick={false}
        >
            <div>id: {props.data.id}</div>
            <div>latitude: {props.data.latitude}</div>
            <div>longitude: {props.data.longitude}</div>
        </Popup>
    )
}

export default PopupComponent;
