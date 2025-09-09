import { useEffect, useState } from "react";
import { Navbar } from "./features/navigation-bar/Navbar";
import { HomePage } from "./pages/home/HomePage";
import { TraveloguePage } from "./pages/travelogue/TraveloguePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

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
