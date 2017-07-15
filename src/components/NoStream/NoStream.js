// @flow
import React, { Component } from 'react';
import * as firebase from 'firebase';
import './NoStream.css';

type Theme = 'one' | 'two' | 'three';

export type NoStreamProps = {
	visible: boolean,
	title?: string,
	subtitle?: string,
};

type NoStreamState = {
	title?: string,
	subtitle?: string,
	visible?: boolean,
	theme: Theme,
};

function getRandomTheme(): Theme {
	const theme = [ 'one', 'two', 'three' ];
	return theme[Math.floor(Math.random() * theme.length)];
}

export default class NoStream extends Component<*, NoStreamProps, NoStreamState> {
	state = {
		theme: getRandomTheme(),
	};

	componentDidMount() {
		firebase.database().ref('noStream').on('value', snap => this.setState(snap.val()));
	}

	componentWillUpdate(nextProps: NoStreamProps, nextState: NoStreamState) {
		if (this.props.visible !== nextProps.visible || this.state.visible !== nextState.visible) {
			this.setState({ theme: getRandomTheme() });
		}
	}

	render() {
		const visible = typeof this.state.visible === 'boolean' ? this.state.visible : this.props.visible;

		return (
			<div className={`NoStream ${visible ? 'visible' : ''} ${this.state.theme}`}>
				<hgroup>
					<h1>
						{this.state.title || this.props.title}
					</h1>
					<h2>
						{this.state.subtitle || this.props.subtitle}
					</h2>
				</hgroup>
			</div>
		);
	}
}
