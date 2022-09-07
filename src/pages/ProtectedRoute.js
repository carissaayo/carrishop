import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children,user}) => {
 
    if(!user.fullname){
        return <Navigate to="/login"/>
}

    return children
}

export default ProtectedRoute