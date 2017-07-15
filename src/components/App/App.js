// @flow
import React, { Component } from 'react';
import './App.css';
import LowerThird from '../LowerThird/LowerThird';
import Logo from '../Logo/Logo';
import NoStream from '../NoStream/NoStream';
import BandList from '../BandList/BandList';
import type { NoStreamProps } from '../NoStream/NoStream';
import type { BandListProps } from '../BandList/BandList';
import type { LowerThirdProps } from '../LowerThird/LowerThird';

type AppState = {
	lowerThird: LowerThirdProps,
	bandList: BandListProps,
	noStream: NoStreamProps,
};

class App extends Component<*, *, AppState> {
	state = {
		lowerThird: {
			visible: false,
		},
		bandList: {
			visible: false,
		},
		noStream: {
			visible: false,
		},
	};
	componentDidMount() {
		setInterval(() => {
			this.setState({
				lowerThird: {
					...this.state.lowerThird,
					visible: true,
				},
			});
			setTimeout(
				() =>
					this.setState({
						lowerThird: {
							...this.state.lowerThird,
							visible: false,
						},
					}),
				10 * 1000
			);
		}, 3 * 60 * 1000);

		setInterval(() => {
			this.setState({
				bandList: {
					...this.state.bandList,
					visible: true,
				},
			});
			setTimeout(
				() =>
					this.setState({
						bandList: {
							...this.state.bandList,
							visible: false,
						},
					}),
				15 * 1000
			);
		}, 12 * 60 * 1000);

		setInterval(() => {
			this.setState({ noStream: { ...this.state.noStream, visible: true } });
		}, 60 * 1000);
	}
	render() {
		const { lowerThird, noStream, bandList } = this.state;
		return (
			<div className="App">
				<Logo />
				<LowerThird {...lowerThird} />
				<BandList {...bandList} />
				<NoStream {...noStream} />
			</div>
		);
	}
}

export default App;
