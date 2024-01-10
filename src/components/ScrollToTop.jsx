import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { up } from "../assets/icons";

const ScrollToTop = () => {
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsScrollTopVisible(true);
            } else {
                setIsScrollTopVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (pathname === "/") {
        return null;
    }

    return (
        <div
            onClick={scrollToTop}
            className="fixed bottom-2 right-2 cursor-pointer"
            style={{
                backgroundColor: "#ed008c",
                borderRadius: "50%",
                zIndex: 9999,
                opacity: isScrollTopVisible ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
                pointerEvents: isScrollTopVisible ? "auto" : "none",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src={up}
                alt="Scroll to top"
                style={{
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                }}
            />
        </div>
    );
};
export default ScrollToTop;
