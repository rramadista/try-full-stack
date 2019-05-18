import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import './App.css';


const loading = () => (
	<div>
		<Spinner label="Loading..." size={SpinnerSize.large}/>
	</div>
)

const DefaultLayout = Loadable({
	loader: () => import('./components/templates/DefaultLayout'),
	loading
})

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					{/* <Route exact path="/login" name="Login Page" component={Login} />
					<Route exact path="/register" name="Register Page" component={Register} />
					<Route exact path="/404" name="Page 404" component={Page404} />
					<Route exact path="/500" name="Page 500" component={Page500} /> */}
					<Route exact path="/" name="Home" component={DefaultLayout} />
				</Switch>
			</Router>
		);
	}
}

export default App;