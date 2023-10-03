import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import ThemeContext from "./ThemeContext";

function ThemeProviderComponent({ children }) {
  const [isDark, setDark] = useState(false);

  const websiteTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
        },
      }),
    [isDark]
  );

  const setTheme = (value) => {
    localStorage.setItem("isDark", value);
    setDark(value);
  };

  useEffect(() => {
    let mode = localStorage.getItem("isDark");
    setDark(JSON.parse(mode));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      <ThemeProvider theme={websiteTheme}>
        <Paper
          elevation={0}
          style={{
            minHeight: "100vh",
            background: isDark
              ? "#1C1B23"
              : "linear-gradient(to right,#A4F2FF,#FFBFFC)",
            color: isDark ? "white":"dark"
          }}
        >
          {children}
        </Paper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProviderComponent;
