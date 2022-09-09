import { useEffect } from "react"
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children,user}) => {
 useEffect(()=>{
     if(!user?.fullname){
         return <Navigate to="/login"/>
 }
 },[])

    return children
}

export default ProtectedRoute