import { useContext } from "react"
import UserContext from "../UserContext"

function Footer() {
    const {loggedIn} = useContext(UserContext)
    return (
        <footer>
            Copyright
            <button>{ loggedIn ? 'Logout' : 'Login' }</button>
        </footer>
    )
}

export default Footer