import { userActions } from "./users-slice";
import axios from "axios";

export const fetchUsers = () => {
    return (dispatch) => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                dispatch(userActions.setItems(response.data));
            });
    };
};
