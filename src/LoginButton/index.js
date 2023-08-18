import { useContext } from "react"
import UserContext from "../UserContext"

function LoginButton () {
    const {loggedIn, toggleLoggedIn} = useContext(UserContext)
    
    return (
        <button onClick={toggleLoggedIn}>{ loggedIn ? 'Logout' : 'Login' }</button>
    )
}

export default LoginButton