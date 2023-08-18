import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

function Nav() {
    const userData = useContext(UserContext)

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/secret">Secret page</NavLink>
            <button>{ userData.loggedIn ? 'Logout' : 'Login' }</button>
        </nav>
    )
}

export default Nav