import NavBar from "./components/NavBar";
import RegisterForm from "./components/RegisterForm";
import DateTimeExample from "./pages/DateTimeExample";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
			<Redirect exact path="/" to="register" />
			<Switch>
				<Route path="/register" exact component={RegisterForm} />
				<Route path="/date-time" exact component={DateTimeExample} />
			</Switch>
		</>
	);
}

export default App;
