import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UsersCard() {
	const [userData, setUserData] = useState({
		username: 'lili',
		userPicture:
			'https://images.pexels.com/photos/7245308/pexels-photo-7245308.jpeg?auto=compress&cs=tinysrgb&w=168',
		address: 'San Francisco, CA',
		date: '12:00pm, 11/04/1995',
		heading: 'Hey Picos! I need your Help',
		text:
			"Pico community, I'm in the middle of making lasagna but I'm missing one important ingredient - ground beef. If anyone has any spare, I would be immensely grateful for your help.",
	});

	return (
		<div>
			<Row>
				<Col>
					<img src={userData.userPicture} alt="User profile" />
				</Col>
				<Col>
					<h5>{userData.heading}</h5>
					<h5>{userData.username}</h5>
					<p>{userData.text}</p>
				</Col>
				<Col>
					<h5>Location:</h5>
					<h6>{userData.address}</h6>
					<h5>Date:</h5>
					<h6>{userData.date}</h6>
				</Col>
			</Row>
		</div>
	);
}

export default UsersCard;
