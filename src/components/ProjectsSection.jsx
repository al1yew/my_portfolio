import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { projects } from "../constants";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import image from "../assets/images/giphy.gif";
import img from "../assets/images/square.jpg";

const ProjectsSection = () => {
    const [category, setCategory] = useState("all");
    const categories = ["All", ...new Set(projects.map((x) => x.category))];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    fade: false,
                    autoplay: false,
                    autoplaySpeed: 7000,
                    pauseOnHover: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    fade: false,
                    autoplay: false,
                    autoplaySpeed: 7000,
                    pauseOnHover: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                    autoplay: false,
                    autoplaySpeed: 7000,
                    pauseOnHover: true,
                },
            },
        ],
    };

    const filteredProjects =
        category.toLowerCase() === "all"
            ? projects
            : projects.filter((project) => project.category === category);

    return (
        <section className="projects" id="Projects">
            <div className="container">
                <div className="row all">
                    <h1>Projects</h1>
                    <ul className="categories">
                        {categories.map((c, i) => {
                            return (
                                <li
                                    key={i}
                                    className={
                                        c.toLowerCase() ===
                                        category.toLowerCase()
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setCategory(c)}
                                >
                                    {c}
                                </li>
                            );
                        })}
                    </ul>
                    <Slider {...settings} className="iteratedprojects">
                        {filteredProjects.map((project) => (
                            <div className="project" key={project.id}>
                                <div className="projectitems">
                                    <div className="imgkeeper">
                                        <img
                                            src={img}
                                            alt={project.projectName}
                                        />
                                    </div>
                                    <p>{project.projectName}</p>
                                    <p>{project.smallDescription}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};
export default ProjectsSection;
