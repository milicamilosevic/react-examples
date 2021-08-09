import { useDispatch } from "react-redux";

import { userActions } from "../../store/users-slice";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
    const dispatch = useDispatch();

    const { id, name, email, phone } = props.user;

    const removeItemHandler = (event) => {
        event.stopPropagation();
        dispatch(userActions.removeFromList(props.user.id));
    };

    const selectUserHandler = () => {
        dispatch(userActions.setSelectedUser(id));
    };

    console.log(props);

    const listItemClasses = `${classes["user-item"]} ${
        props.selected ? classes["selected-user"] : ""
    }`;

    return (
        <li className={listItemClasses} onClick={selectUserHandler}>
            <div>
                <span>name: </span>
                {name}
            </div>
            <div>
                <span>email: </span>
                {email}
            </div>
            <div>
                <span>phone: </span>
                {phone}
            </div>
            <button onClick={removeItemHandler}>+</button>
        </li>
    );
};

export default UserItem;
