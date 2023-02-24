import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function GoogleMap(props) {
	const currentPosition = { lat: 39.2904, lng: -76.6122 };

	return (
		<Map google={props.google} zoom={10} initialCenter={currentPosition} style={{ height: '400px', width: '100%', margin_bottom:'200px'}}>
			<Marker position={currentPosition} />
		</Map>
	);
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_API_KEY,
})(GoogleMap);
