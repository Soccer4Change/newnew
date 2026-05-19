import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      // Always send page view info for SPA routing
      window.gtag('config', 'AW-17296044841', {
        page_path: location.pathname,
      });

      window.gtag('event', 'conversion', {
        send_to: 'AW-17296044841/RsnWCJePiewaEKnmsrdA',
      });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
