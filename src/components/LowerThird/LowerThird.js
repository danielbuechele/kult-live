// @flow
import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import * as firebase from 'firebase';
import './LowerThird.css';

export type LowerThirdProps = {
	visible: boolean,
	title?: string,
};

type LowerThirdState = {
	title?: string,
	visible?: boolean,
};

export default class LowerThird extends Component<*, LowerThirdProps, LowerThirdState> {
	state = {};

	componentDidMount() {
		firebase.database().ref('lowerThird').on('value', snap => this.setState(snap.val()));
	}

	render() {
		const visible = typeof this.state.visible === 'boolean' ? this.state.visible : this.props.visible;

		return (
			<div className={`LowerThird ${visible ? 'visible' : ''}`}>
				<img className="logo" src={logo} alt="" />
				<div className="container">
					<h1>
						{this.state.title || this.props.title}
					</h1>
				</div>
			</div>
		);
	}
}
