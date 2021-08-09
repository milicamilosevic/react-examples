import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={classes["navbar-container"]}>
			<NavLink to="/register" activeClassName={classes["active-link"]}>
				Registracija
			</NavLink>
			<NavLink to="/date-time" activeClassName={classes["active-link"]}>
				Datum i vrijeme
			</NavLink>
		</div>
	);
};

export default NavBar;
