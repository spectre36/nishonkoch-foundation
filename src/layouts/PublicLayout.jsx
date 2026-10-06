import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout() {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const element = document.getElementById(
          location.hash.replace("#", "")
        );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    const timer = setTimeout(scrollToSection, 200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default PublicLayout;