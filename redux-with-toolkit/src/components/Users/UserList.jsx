import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../store/user-actions";

import UserItem from "./UserItem";
import classes from "./UserList.module.css";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.items);
    const selectedUser = useSelector((state) => state.users.selectedUser);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <ul className={classes["user-list"]}>
                {users.map((e) => (
                    <UserItem
                        key={e.id}
                        user={e}
                        selected={selectedUser && selectedUser.id === e.id}
                    />
                ))}
            </ul>
        </>
    );
};

export default UserList;
