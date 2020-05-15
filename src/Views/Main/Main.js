import React from 'react';

import MapContainer from './../../Components/Map/MapContainer';
import AddFormContainer from '../../Components/AddForm/AddFormContainer';
import DialogContainer from '../../Components/Dialog/DialogContainer';
import NotificationContainer from '../../Components/Notification/NotificationContainer';

function Main(props)
{
    return(
        <div>
            <NotificationContainer />
            <DialogContainer />
            <MapContainer />
            <AddFormContainer />
        </div>
        
    )
}

export default Main;
