import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menu4, close } from "../assets/icons";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
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
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-mono text-sm md:text-lg ${
                                    isActive ? "text-blue-600" : "text-white"
                                }`
                            }
                            onClick={toggleSidebar}
                        >
                            Liza's Space
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `font-mono text-sm md:text-lg ${
                                    isActive ? "text-blue-600" : "text-white"
                                }`
                            }
                            onClick={toggleSidebar}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `font-mono text-sm md:text-lg ${
                                    isActive ? "text-blue-600" : "text-white"
                                }`
                            }
                            onClick={toggleSidebar}
                        >
                            My Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `font-mono text-sm md:text-lg ${
                                    isActive ? "text-blue-600" : "text-white"
                                }`
                            }
                            onClick={toggleSidebar}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/testimonials"
                            className={({ isActive }) =>
                                `font-mono text-sm md:text-lg ${
                                    isActive ? "text-blue-600" : "text-white"
                                }`
                            }
                            onClick={toggleSidebar}
                        >
                            Peer Endorsements💖
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/license"
                            className={({ isActive }) =>
                                `font-mono text-sm md:text-lg ${
                                    isActive ? "text-blue-600" : "text-white"
                                }`
                            }
                            onClick={toggleSidebar}
                        >
                            License
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div
                className={`menu-icon ${isSidebarOpen ? "hidden" : "visible"}`}
                onClick={toggleSidebar}
            >
                <img src={menu4} alt="Menu" />
            </div>
        </>
    );
};

export default Navbar;
