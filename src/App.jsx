import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { ThemeProvider } from "./themeContext";
import { useEffect, useState } from "react";
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
        <ThemeProvider>
            <Navbar />
            <Content />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
