import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';
// import Shop from './components/shop';

function App() {
	return (
		<div className="navRoute">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					{/* <Route path="/shop" component={Shop} /> */}
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
