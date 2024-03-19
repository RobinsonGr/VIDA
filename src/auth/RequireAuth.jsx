

//get auth
//conditional returns navigate with login and replace
//otherwise, it returns children (this will be a Higer order component)

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuth ({children}) {
    //const auth = useSelector(state => state.auth.isAuth)

    //if(false) {
        //with replace if go back in the url history, it won;t go to editUser but to the previus route
        //return <Navigate to="/login" replace/>
    //}
    return children
}

export {RequireAuth} 