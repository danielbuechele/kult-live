// @flow

import React, { Component } from 'react';
import logo from '../../assets/images/logo-white.svg';
import './Logo.css';

export default class Logo extends Component<*, void, *> {
	render() {
		return <img className="Logo" src={logo} alt="" />;
	}
}
