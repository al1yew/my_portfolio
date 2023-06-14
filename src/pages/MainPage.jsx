import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet";

const MainPage = () => {
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

                <title>Developer you always needed!</title>
            </Helmet>

            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
        </main>
    );
};
export default MainPage;
