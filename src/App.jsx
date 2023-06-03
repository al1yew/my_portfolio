import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { AppProvider } from "./context";

function App() {
    return (
        <>
            <AppProvider>
                <Navbar />
                <Content />
                <Footer />
            </AppProvider>
        </>
    );
}

export default App;
