import UserList from "./Users/UserList";
import UserPreview from "./Users/UserPreview";
import classes from "./Layout.module.css";
import RefreshControl from "./RefreshControl";

const Layout = () => {
    return (
        <div className={classes["main-container"]}>
            <main className={classes["user-list-container"]}>
                <UserList />
            </main>
            <section className={classes["selected-user-container"]}>
                <UserPreview />
            </section>
            <RefreshControl />
        </div>
    );
};

export default Layout;
