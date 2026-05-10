import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./pages/MainPage";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<MainPage />} />
            <Route path="project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    return isLoading ? (
        <Preloader />
    ) : (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
