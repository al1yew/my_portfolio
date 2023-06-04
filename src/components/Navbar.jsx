import { links } from "../constants";
import { BsSun, BsMoon } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";
import logoWhite from "../assets/images/logoW.jpg";
import { useRef, useEffect } from "react";

const Navbar = () => {
    const { isDarkTheme, toggleDarkTheme, isSidebarOpen, setIsSidebarOpen } =
        useGlobalContext();

    const sidebarRef = useRef(null);

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
    }, [setIsSidebarOpen]);

    return (
        <header id="header" className="header">
            <div className="all">
                <div className="imgkeeper col-lg-1 col-2 col-md-1-5">
                    <a href="#Home">
                        <img src={logoWhite} alt="vasif aliyev" />
                    </a>
                </div>
                <ul className="comp_ul col-lg-7 col-md-9">
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <a href={"#" + link}>{link}</a>
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
        </header>
    );
};
export default Navbar;
