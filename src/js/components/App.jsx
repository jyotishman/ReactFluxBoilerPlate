import React , {Component} from 'react';
import AppActions from '../actions/AppActions.jsx';
import AppStore from '../stores/AppStore.jsx';



class App extends Component{
	render() {
		return (
			<div className="container">
				<h1 className="app-title">Flux Wallet</h1>
			</div>
		);
	}

}

export default App