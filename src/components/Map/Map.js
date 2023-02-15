import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const Map = () => {
	const center = {
		lat: 37.7749,
		lng: -122.4194,
	};

	const [isPlaying, setIsPlaying] = useState(false);

	const handleMapClick = () => {
		setIsPlaying(true);
	};

	const handleMapIdle = () => {
		if (isPlaying) {
			const audio = new Audio('/path/to/my/audio/file.mp3');
			audio.play();
		}
	};
	return (
		<div style={{ height: '400px' }}>
			<LoadScript googleMapsApiKey={process.env.GoogleMap}>
				<GoogleMap
					center={center}
					zoom={10}
					mapTypeId="roadmap"
					options={{
						disableDefaultUI: true,
						zoomControl: true,
					}}
					onClick={handleMapClick}
					onIdle={handleMapIdle}
				/>
			</LoadScript>
		</div>
	);
};

export default Map;
