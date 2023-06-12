import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timeout);
    }, []);

    return isLoading ? (
        <Preloader />
    ) : (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
