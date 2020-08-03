import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form } from 'react-bootstrap';
import icon from '../assets/images/nike-logo.png';

class NavBar extends Component {
	state = {
		isFocused: false
	};

	handleFocus = () => {
		console.log('focus');
		this.setState((e) => ({
			isFocused: !e.isFocused
		}));
	};

	render() {
		return (
			<Navbar className="nav-style" collapseOnSelect expand="lg" fixed="top">
				<Navbar.Brand href="/" className="nav-brand">
					<img alt="" src={icon} className="nav-icon" />
				</Navbar.Brand>
				<Nav className="nav-link-group">
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						NEW RELEASES
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						MEN
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						WOMEN
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						KIDS
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						CUSTOMIZE
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						SALE
					</Nav.Link>
				</Nav>
				<Form inline className="nav-form">
					{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-primary">Search</Button> */}
				</Form>
			</Navbar>
		);
	}
}

export default NavBar;
