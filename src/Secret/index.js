import { useContext } from "react"
import UserContext from "../UserContext"

function Secret() {
    const {loggedIn} = useContext(UserContext)

    return (
        <div>
            { loggedIn ? <h1>Secret page</h1> : 'Bugger off' }
        </div>
    )
}

export default Secret