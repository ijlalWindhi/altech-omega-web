import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// layout
import LandingPageLayout from "@/components/layout/landing-page";

// pages
import Home from "@/pages/index";
import Login from "@/pages/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </>
  )
);

export default router;
