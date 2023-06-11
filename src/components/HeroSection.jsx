import CV from "../assets/files/CV.pdf";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import img1 from "../assets/images/1-02.png";
import img2 from "../assets/images/1-03.png";
import img3 from "../assets/images/1-04.png";
import img4 from "../assets/images/1-05.png";

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
            <div className=" all">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 left">
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
                        <button
                            type="button"
                            className="col-lg-5-5 col-5-5 col-md-5-5"
                            onClick={downloadFile}
                        >
                            Download My CV
                        </button>
                        <div className="icons col-lg-5-5 col-5-5 col-md-5-5">
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
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 right">
                    <div className="imgkeeper">
                        <img src={img1} alt="developer" />
                    </div>
                    <div className="imgkeeper">
                        <img src={img2} alt="code" />
                    </div>
                    <div className="imgkeeper">
                        <img src={img3} alt="software" />
                    </div>
                    <div className="imgkeeper">
                        <img src={img4} alt="website" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;
