import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeProviderComponent from "./Theme/ThemeProvider";
import Router from "./Router/Router";
import main from "./main";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    main();
  }, []);
  return (
    <ThemeProviderComponent>
      <Router />
    </ThemeProviderComponent>
    
  );
}

export default App;
