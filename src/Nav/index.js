import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";
import LoginButton from "../LoginButton";

function Nav() {
    const {loggedIn} = useContext(UserContext)

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            { loggedIn && <NavLink to="/secret">Secret page</NavLink> }
            <LoginButton />
        </nav>
    )
}

export default Nav