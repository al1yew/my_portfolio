import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
const ProjectsSection = () => {
    const [category, setCategory] = useState("all");
    const categories = ["All", ...new Set(projects.map((x) => x.category))];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        nextArrow: <BiSkipNextCircle />,
        prevArrow: <BiSkipPreviousCircle />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <section className="projects">
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
                                        {/* <img
                                        src={project.image}
                                        alt={project.projectName}
                                    /> */}
                                        <span>
                                            Here <br /> will be <br /> the image
                                        </span>
                                    </div>
                                    <p>{project.projectName}</p>
                                    <p>{project.smallDescription}</p>
                                    <div className="links">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="websitelink"
                                        >
                                            View Website
                                        </a>
                                        <Link
                                            to={"/" + project.id}
                                            className="projectlink"
                                        >
                                            View Details
                                        </Link>
                                    </div>
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
