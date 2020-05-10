import React from 'react';

import MapContainer from './../../Components/Map/MapContainer';
import AddFormContainer from '../../Components/AddForm/AddFormContainer';
import DialogContainer from '../../Components/Dialog/DialogContainer';

function Main(props)
{
    return(
        <div>
            <DialogContainer />
            <AddFormContainer />
            <MapContainer />
        </div>
        
    )
}

export default Main;
