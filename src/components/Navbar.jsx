import { links } from "../constants";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
    return (
        <nav id="header">
            <div className="all">
                <div className="imgkeeper">
                    <a href="#HOME">
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
            </div>
        </nav>
    );
};
export default Navbar;
