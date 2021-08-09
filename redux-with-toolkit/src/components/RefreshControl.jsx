import { fetchUsers } from "../store/user-actions";
import { useDispatch } from "react-redux";

import classes from "./RefreshControl.module.css";

const RefreshControl = () => {
    const dispatch = useDispatch();

    const refreshHandler = () => {
        dispatch(fetchUsers());
    };

    return (
        <div className={classes["icon-container"]} onClick={refreshHandler}>
            <i className="fa fa-sync fa-4x" aria-hidden="true"></i>
        </div>
    );
};

export default RefreshControl;
