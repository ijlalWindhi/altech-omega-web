import { Outlet } from "react-router-dom";
import Navbar from "@/components/fragments/layout-landing-page/navbar";
import Footer from "@/components/fragments/layout-landing-page/footer";

function LandingPage() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default LandingPage;
