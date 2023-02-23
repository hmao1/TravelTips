import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery, Rating}  from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Map = () => {
    const minWidth = useMediaQuery('(min-width: 600px)');
    const initialCoordinates = {lat: 0, lng: 0};

    return (<div><GoogleMapReact 
         bootstrapURLKeys={{ key: 'AIzaSyCXsiVq8WQLZZxzSZ7hbJa1opfTBbSLBEI' }}
        defaultCenter={initialCoordinates}
        center={initialCoordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}

    /></div>)   
}

export default Map;