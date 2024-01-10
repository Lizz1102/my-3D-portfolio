import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logo, menu4, close } from "../assets/icons";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
    <div
        className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
    >
        <div
            className={`navbar-close-icon ${
                isSidebarOpen ? "visible" : "hidden"
            }`}
            onClick={toggleSidebar}
        >
            <img src={close} alt="close icon" />
        </div>
        <ul>
            {[
                { to: "/", text: "Liza's Space" },
                { to: "/about", text: "About Me" },
                { to: "/contact", text: "Contact" },
                { to: "/license", text: "License" },
            ].map(({ to, text }) => (
                <li key={to}>
                    <NavLink
                        to={to}
                        className={({ isActive }) =>
                            `nav-link font-poppins text-sm md:text-lg transition-all duration-300 ${
                                isActive ? "text-white active" : "text-white"
                            }`
                        }
                        onClick={toggleSidebar}
                    >
                        {text}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);

    const menuIconRef = React.useRef(null);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = currentScrollPos > 0;
            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const closeSidebarIfOpen = (e) => {
            if (isSidebarOpen && e.target !== menuIconRef.current) {
                toggleSidebar();
            }
        };

        document.addEventListener("click", closeSidebarIfOpen);

        return () => {
            document.removeEventListener("click", closeSidebarIfOpen);
        };
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div
                className={`${
                    isHomePage
                        ? ""
                        : "sticky top-0 left-0 z-50 w-full h-20 transition-all duration-300"
                } ${visible ? "bg-white shadow-lg" : "bg-transparent"}`}
            >
                <div className="fixed top-5 left-5 z-50">
                    <Link to="/">
                        <img
                            src={logo}
                            className="w-11 h-11 cursor-pointer object-contain"
                        />
                    </Link>
                </div>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
                <div
                    className={`menu-icon top-4 right-5 ${
                        isSidebarOpen ? "hidden" : "visible"
                    }`}
                    onClick={toggleSidebar}
                >
                    <img ref={menuIconRef} src={menu4} alt="Menu" />
                </div>
            </div>
        </>
    );
};

export default Navbar;
