import { useContext } from "react"
import UserContext from "../UserContext"

function Footer() {
    const {loggedIn, toggleLoggedIn} = useContext(UserContext)
    return (
        <footer>
            Copyright
            <button onClick={toggleLoggedIn}>{ loggedIn ? 'Logout' : 'Login' }</button>
        </footer>
    )
}

export default Footer