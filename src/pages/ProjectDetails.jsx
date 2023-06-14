import { useParams } from "react-router-dom";
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
                <meta charset="UTF-8" />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="./src/assets/images/favicon.png"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1"
                />
                <meta
                    name="description"
                    content="Vasif Aliyev - Software Developer"
                />
                <meta name="author" content="vasifaliyev.com" />
                <meta
                    name="robots"
                    content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large, developer, web developer, software developer, asp.net, c#, react, software engineer"
                />
                <meta
                    name="keywords"
                    content="developer, web developer, software developer, asp.net, c#, react, software engineer, vasif, aliyev, vasif aliyev, html, css, scss, mvc, web api, bp, vinyoxla, vin yoxlamaq"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Vasif Aliyev - Software Developer You Always Needed!"
                />
                <meta
                    property="og:description"
                    content="Proficiency in both Back-end and Front-end Technologies."
                />
                <meta
                    property="og:image"
                    content="https://vasifaliyev.com/assets/images/favicon.png"
                />
                <meta property="og:url" content="https://vasifaliyev.com" />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Vasif Aliyev - Software Developer You Always Needed!"
                />
                <meta
                    name="twitter:description"
                    content="Proficiency in both Back-end and Front-end Technologies."
                />

                <meta
                    name="google-site-verification"
                    content="OAWIN9qGsOUd2ouA7TA69lbknYrOpwRlGhWIs5ntBM0"
                />

                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-XQVPX8PYKD"
                ></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'G-XQVPX8PYKD');
                    `}
                </script>

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
        </main>
    );
};
export default ProjectDetails;
