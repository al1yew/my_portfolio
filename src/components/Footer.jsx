import imageblack from "../assets/images/namelogoblack.png";
import imagewhite from "../assets/images/namelogowhite.png";
import { useThemeContext } from "../themeContext";
import CV from "../assets/files/CV.pdf";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Footer = () => {
    const { isDarkTheme } = useThemeContext();

    const downloadFile = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "VASIF_ALIYEV_CV.pdf";
        link.target = "_blank";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="footer">
            <div className="container">
                <div className="all row">
                    <div className="col-lg-2 col-12 col-md-3 col-sm-4 first">
                        <img
                            src={isDarkTheme ? imagewhite : imageblack}
                            alt="vasif aliyev"
                        />
                    </div>
                    <div className="col-lg-6 col-5 col-md-3 col-sm-4 second">
                        <span>
                            <a
                                href="https://github.com/al1yew"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </span>
                        <span>
                            <a
                                href="https://www.linkedin.com/in/vasif-aliyev/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </span>
                        <span>
                            <a
                                href="mailto:vasifaliyev.baku@gmail.com"
                                target="_blank"
                            >
                                <FiMail />
                            </a>
                        </span>
                    </div>
                    <button
                        type="button"
                        className="col-lg-2 col-5 col-md-3 col-sm-4"
                        onClick={downloadFile}
                    >
                        Download My CV
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Footer;
