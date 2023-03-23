import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyD-6gIFIEoRJ7NMhX8d4wPZ5OkF_9gMJQw',
	authDomain: 'fakecarstore.firebaseapp.com',
	projectId: 'fakecarstore',
	storageBucket: 'fakecarstore.appspot.com',
	messagingSenderId: '177587967165',
	appId: '1:177587967165:web:94542abe3e60238daa93d4',
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
