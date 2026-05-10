import { ScrollRestoration, useParams } from "react-router-dom";
import { projects } from "../constants";
import { Helmet } from "react-helmet-async";
const ProjectDetails = () => {
    const { id } = useParams();

    const {
        category,
        projectName,
        longDescription,
        technologies,
        link,
        smallImage,
    } = projects.find((x) => x.id == id);

    return (
        <main>
            <Helmet>
                <title>Project: {projectName}</title>
            </Helmet>

            <section className="projectdetails">
                <div className="container">
                    <div className="row all">
                        <h1>{projectName}</h1>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 left">
                            <img
                                src={smallImage}
                                alt={projectName}
                                className="small"
                            />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 right">
                            <p>Category: {category}</p>
                            <p>Used Technologies:</p>
                            <div className="technologies">
                                {technologies.map((tech, i) => {
                                    return <span key={i}>{tech}</span>;
                                })}
                            </div>
                            <a href={link} target="_blank" rel="noreferrer">
                                View Website
                            </a>
                        </div>
                        <p className="col-lg-12 col-md-12 col-sm-12 col-12 desc">
                            {longDescription}
                        </p>
                    </div>
                </div>
            </section>
            <ScrollRestoration />
        </main>
    );
};
export default ProjectDetails;
