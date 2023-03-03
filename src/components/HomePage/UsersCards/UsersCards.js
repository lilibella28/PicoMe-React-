import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {useState} from 'react';




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
		<Row>
			<Col xs={12} sm={4} lg={3}>
				<img src={userData.userPicture} alt="User profile" />
			</Col>
			<Col xs={12} sm={8} lg={6}>
				<h5>{userData.heading}</h5>
				<h5>{userData.username}</h5>
				<p>{userData.text}</p>
			</Col>
			<Col xs={12} lg={3}>
				<h5>Location:</h5>
				<h6>{userData.address}</h6>
				<h5>Date:</h5>
				<h6>{userData.date}</h6>
			</Col>
		</Row>
	);
}

export default UsersCard;
