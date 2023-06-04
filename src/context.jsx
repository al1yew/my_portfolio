import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme:dark)"
    ).matches;

    const storedDarkMode = localStorage.getItem("dark_theme") === "true";

    return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem("dark_theme", newDarkTheme);
    };

    useEffect(() => {
        document.body.classList.toggle("dark_theme", isDarkTheme);
    }, [isDarkTheme]);

    return (
        <AppContext.Provider
            value={{
                isDarkTheme,
                toggleDarkTheme,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
