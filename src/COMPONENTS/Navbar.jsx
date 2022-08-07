import { useState } from "react"
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";


export default function Navbar(){

    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false);
    }

    return(
        <>
        <div className="navbar container">
            <a href="#" className="logo"><span className="f">F</span><span className="oo">oo</span>dies<span className="h">H</span>ub</a>
            <div className="nav-links">
                {
                    links.map((link) => (
                        <Link to={link.path} className={ location.pathname == link.path ? "sidebar-link active" : "sidebar-link" } key={link.name}>{link.name}</Link>
                    ))
                }
            </div>
            <div 
                className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
                onClick={() => setShowSidebar(!showSidebar)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        { showSidebar && <Sidebar close={ closeSidebar } links={ links } /> } 
        </>

        
    )
}