import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <main>
                <Helmet>
                    <title>Developer you always needed!</title>
                </Helmet>

                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <CertificatesSection />
                <ContactSection />
                <ScrollRestoration />
            </main>
        </>
    );
};
export default MainPage;
