import hero from "../assets/images/photo1_edit.jpeg";
import CV from "../assets/files/CV.pdf";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const HeroSection = () => {
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
        <section className="home" id="Home">
            <div className="all">
                <div className="col-lg-6 col-md-6 col-12 left">
                    <p>Hello, My name is</p>
                    <p>Vasif Aliyev</p>
                    <p>and I am</p>
                    <p>Software Developer</p>
                    <p>
                        Welcome to my digital realm, where creativity meets
                        functionality. Join me on this exciting journey as we
                        build remarkable software solutions together.
                    </p>
                    <div className="bottom col-lg-12 col-12 col-md-12">
                        <button type="button" onClick={downloadFile}>
                            Download My CV
                        </button>
                        <div className="icons">
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
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 right">
                </div>
            </div>
        </section>
    );
};
export default HeroSection;
