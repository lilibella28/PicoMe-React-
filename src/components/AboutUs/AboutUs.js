import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from '../Header/Header';
import Card from '../Cards/Cards'
import ErrorBoundary from '../../ErrorHandler/ErrorHandler';
import '../../scss/AboutUs/AboutUs.scss';
function AboutUs() {
	return (
		<Container>
			<ErrorBoundary>
				<Map />
			</ErrorBoundary>

			<h3>Connecting communities, fighting hunger, together.</h3>
			<main>
			<Row className="my-card">
				<Col xs={4}>
					<Card
							title="Mission"
							text=
								{`Our mission at PicoMe is to create a community-driven platform that connects individuals
								and families in need with those who are able to provide food and support. By fostering a
								spirit of generosity and compassion, we strive to fight hunger and provide nourishment
								for those who are facing food insecurity. Our goal is to empower individuals to make a
								positive impact in their communities and to create a world where everyone has access to
								healthy and fulfilling meals.`}
							/>
				</Col>
				<Col xs={4}>
					<Card
							title="Vision"
							text=
								{`Our vision at PicoMe is to build a world where no one goes hungry and where everyone has
								access to nutritious food. By harnessing the power of technology and community spirit,
								we aim to create a sustainable solution to food insecurity and to empower individuals to
								make a difference in their communities. Through our platform, we envision a future where
								people can easily connect with one another to share food and support, creating a ripple
								effect of kindness and generosity.`}
						/>
				</Col>
				<Col xs={4}>
					<Card
							title="Disclaimer"
							text=
								{`This app was built as an educational project and personal endeavor, and is not yet
								intended for commercial use. It is designed to provide a platform for individuals to
								connect and share resources, and should not be used for any other purposes.As this app
								is still in its developmental stages, it may not yet be fully functional or secure. It
								is the user's responsibility to assess the suitability and safety of this app for their
								needs, and to use it at their own risk.`}
							/>
				</Col>
			</Row>
			</main>
		</Container>
	);
}

export default AboutUs;
