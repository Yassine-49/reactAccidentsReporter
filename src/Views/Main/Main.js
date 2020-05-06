import React from 'react';

import MapContainer from './../../Components/Map/MapContainer';
import AddFormContainer from '../../Components/AddForm/AddFormContainer';

function Main(props)
{
    return(
        <div>
            <AddFormContainer />
            <MapContainer />
        </div>
        
    )
}

export default Main;
