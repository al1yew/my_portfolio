import { certificates } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const CertificatesSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
    };

    return (
        <section className="certificates" id="Certificates">
            <div className="container">
                <div className="row all">
                    <h1>Certificates</h1>
                    <Slider {...settings} className="iteratedcertificates">
                        {certificates.map((cert) => {
                            return (
                                <div className="cert" key={cert.id}>
                                    <div className="certitems">
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-12 imgkeeper">
                                            <img
                                                src={cert.image}
                                                alt="vasif aliyev"
                                            />
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 contentkeeper">
                                            <p>{cert.certName}</p>
                                            <p>{cert.date}</p>
                                            <p>{cert.description}</p>
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                View Certificate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};
export default CertificatesSection;
