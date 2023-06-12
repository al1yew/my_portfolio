import { links } from "../constants";
import { BsSun, BsMoon } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useThemeContext } from "../themeContext";
import logoWhite from "../assets/images/logoW.png";
import logoBlack from "../assets/images/logoB.png";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isDarkTheme, toggleDarkTheme } = useThemeContext();

    const sidebarRef = useRef(null);

    const [isScroll, setIsScroll] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSidebarOpen]);

    return (
        <header className={isScroll ? "header thin_header" : "header"}>
            <div className="container">
                <div className="row all">
                    <div className="imgkeeper">
                        <Link to="/">
                            <img
                                src={isDarkTheme ? logoBlack : logoWhite}
                                alt="vasif aliyev"
                            />
                        </Link>
                    </div>
                    <ul className="comp_ul col-lg-7 col-md-9">
                        {links.map((link, i) => {
                            return isMainPage ? (
                                <li key={i}>
                                    <a href={"#" + link}>{link}</a>
                                </li>
                            ) : (
                                <li key={i}>
                                    <Link to="/">{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="theme col-lg-1 col-2 col-md-1">
                        {isDarkTheme ? (
                            <span onClick={toggleDarkTheme}>
                                <BsSun />
                            </span>
                        ) : (
                            <span onClick={toggleDarkTheme}>
                                <BsMoon />
                            </span>
                        )}
                    </div>
                    <div className="hamburger col-2 col-md-1">
                        {isSidebarOpen ? (
                            <AiOutlineClose
                                onClick={() => setIsSidebarOpen(false)}
                            />
                        ) : (
                            <RxHamburgerMenu
                                onClick={() => setIsSidebarOpen(true)}
                            />
                        )}
                    </div>
                    <div
                        ref={sidebarRef}
                        className={
                            isSidebarOpen
                                ? "sidebar open_sidebar"
                                : "sidebar close_sidebar"
                        }
                    >
                        <ul className="tel_ul">
                            {links.map((link, i) => {
                                return (
                                    <li
                                        key={i}
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        <a href={"#" + link}>{link}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar;
