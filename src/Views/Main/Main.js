import React from 'react';

import MapContainer from './../../Components/Map/MapContainer';
import AddFormContainer from '../../Components/AddForm/AddFormContainer';

function Main(props)
{
    return(
        <div>
            <h2>Main page</h2>
            <AddFormContainer />
            <MapContainer />
        </div>
        
    )
}

export default Main;
