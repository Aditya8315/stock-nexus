import { useState, useEffect } from "react";
import "./App.css";
import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./components/header";

import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PublicPage from "./components/publicpage";
import Footer from "./components/footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const lightTheme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: "Poppins, Arial, sans-serif",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#1a1f36", // Dark bluish background color for the AppBar
          },
        },
      },
    },
    palette: {
      mode: "light",
      success: {
        main: "#68f77b",
        light: "#dedede",
        dark: "#fefefe",
      },
      error: {
        main: "#ff5465",
        light: "#ff6f6f",
        dark: "#c82333",
      },
    },
  });

  const darkTheme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: "Poppins, Arial, sans-serif",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#101421",
          },
        },
      },
    },
    palette: {
      mode: "dark",
      background: {
        default: "#0a132b",
        paper: "#101421",
      },
      success: {
        main: "#4ee66f",
        light: "#66d1a1",
        dark: "#1e7e34",
      },
      error: {
        main: "#f77e90",
        light: "#ff6f6f",
        dark: "#c82333",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header
          user={user}
          onThemeToggle={handleThemeChange}
          darkMode={darkMode}
        />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
