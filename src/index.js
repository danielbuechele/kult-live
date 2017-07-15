import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App/App';
import * as firebase from 'firebase';

var config = {
	apiKey: 'AIzaSyDFJ8eEALRyh4zqbZ7nYNKjr3EybMopiME',
	authDomain: 'kult-live.firebaseapp.com',
	databaseURL: 'https://kult-live.firebaseio.com',
	projectId: 'kult-live',
	storageBucket: '',
	messagingSenderId: '241196537589',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
