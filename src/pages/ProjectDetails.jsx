import { useParams } from "react-router-dom";
import { projects } from "../constants";

const ProjectDetails = () => {
    const { id } = useParams();

    const {
        category,
        projectName,
        longDescription,
        technologies,
        link,
        bigImage,
        smallImage,
    } = projects.find((x) => x.id == id);

    return (
        <main>
            <section className="projectdetails">
                <div className="container">
                    <div className="row all">
                        <h1>{projectName}</h1>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 left">
                            <img src={bigImage} alt={projectName} className="big"/>
                            <img src={smallImage} alt={projectName} className="small"/>
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
        </main>
    );
};
export default ProjectDetails;
