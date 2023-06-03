import { links } from "../constants";
import logo from "../assets/images/logo.jpg";
import { BsSun, BsMoon } from "react-icons/bs";
import { useGlobalContext } from "../context";

const Navbar = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

    return (
        <nav id="header" className="">
            <div className="all">
                <div className="imgkeeper">
                    <a href="#home">
                        <img src={logo} alt="vasif aliyev" />
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
            </div>
        </nav>
    );
};
export default Navbar;
