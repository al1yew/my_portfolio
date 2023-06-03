import { links } from "../constants";
import { BsSun, BsMoon } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";
import logoWhite from "../assets/images/logoW.jpg";

const Navbar = () => {
    const {
        isDarkTheme,
        toggleDarkTheme,
        isSidebarOpen,
        closeSidebar,
        openSidebar,
    } = useGlobalContext();

    return (
        <nav id="header" className="">
            <div className="all">
                <div className="imgkeeper">
                    <a href="#home">
                        <img src={logoWhite} alt="vasif aliyev" />
                    </a>
                </div>
                <ul>
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <a href={"#" + link}>{link}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="theme">
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
                <div className="hamburger">
                    {isSidebarOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
