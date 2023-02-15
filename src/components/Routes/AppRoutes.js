import React from 'react';
import { BrowserRoutes, Route, Switch } from 'react-router-dom';
import Homepage from '../HomePage/HomePage';
import SignIn from '../SignIn/SignIn';
import FindFood from '../FindFood/FindFood';
import OfferFood from '../OfferFood/OfferFood';
import AboutUs from '../AboutUs/AboutUs';
import OrdenHomepage from '../OrdenHomePage/OrdenHomepage';

function Routes() {
	return (
		<BrowserRoutes>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/about" component={AboutUs} />
				<Route path="/signin" component={SignIn} />
				<Route path="/find" component={FindFood} />
				<Route path="/offer" component={OfferFood} />
			</Switch>
		</BrowserRoutes>
	);
}

export default Routes;
