import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Minis } from "./components/pages/Minis";
import { Projects } from "./components/pages/Projects";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About Me":
        return <About />;
      case "Minis":
        return <Minis />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
