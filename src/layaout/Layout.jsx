import Header from "./Header.jsx";
import { Outlet } from 'react-router-dom'
import { CssBaseline, ScopedCssBaseline } from "@mui/material";


function Layout() {

    return (
        <>
            {/* CssBaseline is for reset styles using material ui, the tipical box-sizing, etc in native css */}
            <CssBaseline/>
            <Header/>
            <Outlet />
        </>
    )
}

export default Layout