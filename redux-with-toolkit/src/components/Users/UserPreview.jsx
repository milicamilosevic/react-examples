import { useSelector } from "react-redux";

import classes from "./UserPreview.module.css";

const UserPreview = () => {
    const selectedUser = useSelector((state) => state.users.selectedUser);

    if (selectedUser) {
        return (
            <div className={classes["user-preview-container"]}>
                <ul>
                    <li>
                        <span>name: </span>
                        {selectedUser.name}
                    </li>
                    <li>
                        <span>email: </span>
                        {selectedUser.email}
                    </li>
                    <li>
                        <span>phone: </span>
                        {selectedUser.phone}
                    </li>
                    <li>
                        <span>username: </span>
                        {selectedUser.username}
                    </li>
                </ul>
                <div className={classes["address-section"]}>
                    <h4>Address:</h4>
                    <section>
                        <div>{selectedUser.address.street}</div>
                        <div>{selectedUser.address.suite}</div>
                        <div>{selectedUser.address.city}</div>
                        <div>{selectedUser.address.zipcode}</div>
                    </section>
                </div>
            </div>
        );
    }

    return (
        <div className={classes["user-preview-container"]}>
            No user selected
        </div>
    );
};

export default UserPreview;
