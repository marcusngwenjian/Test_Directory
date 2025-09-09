import { useEffect, useState } from "react";
import { Navbar } from "./features/navigation-bar/Navbar";
import { HomePage } from "./pages/home/HomePage";
import { TraveloguePage } from "./pages/travelogue/TraveloguePage";

const getPageFromPath = () => {
    const path = window.location.pathname;
    if (path === "/") {
        return "Home";
    }
    // Assumes path is in the format /PageName
    return path.substring(1);
};


export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath());

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage(getPageFromPath());
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // When currentPage changes, scroll to the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "Travelogue":
        return <TraveloguePage />;
      case "Home":
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  );
}
