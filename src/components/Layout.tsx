import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar></Navbar>
            <div className="main-content">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout