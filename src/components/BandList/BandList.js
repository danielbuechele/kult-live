// @flow
import React, { Component } from 'react';
import * as firebase from 'firebase';
import './BandList.css';

type Band = {
	time?: string,
	title?: string,
};

export type BandListProps = {
	visible: boolean,
};

type BandListState = {
	visible?: boolean,
	gb?: Band,
	kb?: Band,
	wb?: Band,
	a?: Band,
	dj?: Band,
};

export default class BandList extends Component<*, BandListProps, BandListState> {
	state = {};

	componentDidMount() {
		firebase.database().ref('bandList').on('value', snap => this.setState(snap.val()));
	}

	render() {
		const { gb, kb, wb, a, dj } = this.state;
		const visible = typeof this.state.visible === 'boolean' ? this.state.visible : this.props.visible;

		return (
			<div className={`BandList ${visible ? 'visible' : ''}`}>
				<div id="now-playing">
					{gb &&
						<div className="act gb">
							<h1>
								<time>{gb.time}</time> <span>{gb.title}</span>
							</h1>
							<h2>Große Bühne</h2>
						</div>}
					{kb &&
						<div className="act kb">
							<h1>
								<time>{kb.time}</time> <span>{kb.title}</span>
							</h1>
							<h2>Kleine Bühne</h2>
						</div>}
					{wb &&
						<div className="act wb">
							<h1>
								<time>{wb.time}</time> <span>{wb.title}</span>
							</h1>
							<h2>Waldbühne</h2>
						</div>}
					{a &&
						<div className="act a">
							<h1>
								<time>{a.time}</time> <span>{a.title}</span>
							</h1>
							<h2>Aula</h2>
						</div>}
					{dj &&
						<div className="act dj">
							<h1>
								<time>{dj.time}</time> <span>{dj.title}</span>
							</h1>
							<h2>DJ-Area</h2>
						</div>}
				</div>
			</div>
		);
	}
}
