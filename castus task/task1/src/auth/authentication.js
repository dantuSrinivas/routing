import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { TokenContext } from "../context/context"


const AuthenticatedRoute = () => {

    let { token } = useContext(TokenContext)

    return (
        token === true ? <Outlet /> : <Navigate to="/login" />
    )
}

export default AuthenticatedRoute