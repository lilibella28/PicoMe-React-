import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Homepage from '../HomePage/HomePage';
import SignIn from '../SignIn/SignIn';
import FindFood from '../FindFood/FindFood';
import OfferFood from '../OfferFood/OfferFood';
import AboutUs from '../AboutUs/AboutUs.js';
import Contact from '../Contact/Contact';

function Router() {
	return (

				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/find" element={<FindFood />} />
					<Route path="/offer" element={< OfferFood />} />
					<Route path="/contact" element={< Contact />} />
				</Routes>
			
	);
}

export default Router;
