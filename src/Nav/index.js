import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

function Nav() {
    const {loggedIn, toggleLoggedIn} = useContext(UserContext)

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            { loggedIn && <NavLink to="/secret">Secret page</NavLink> }
            <button onClick={toggleLoggedIn}>{ loggedIn ? 'Logout' : 'Login' }</button>
        </nav>
    )
}

export default Nav