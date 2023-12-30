import H from "./H";
import { Outlet } from 'react-router-dom'


function Layout() {

    return (
        <>
        <H/>
        <Outlet/>
        </>
    )
}

export default Layout