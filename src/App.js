/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";

// Sign in / Sign up routes
import SignIn from "pages/LandingPages/SignIn";
import SignUp from "pages/LandingPages/SignUP";

// About us page
import AboutUs from "pages/LandingPages/AboutUs";

// Contact us page
import ContactUs from "pages/LandingPages/ContactUs";

// Author us page
import Author from "pages/LandingPages/Author";

// // Categories Page
// import Categories from "pages/LandingPages/Categories";

// // Recommendation Page
// import Favorite from "pages/LandingPages/Favourites";

// // Favourite Page
// import Recommendation from "pages/LandingPages/Recommended";




export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        {localStorage.getItem("login") === "true" ? <Route path="/" element={<Navigate to="/presentation" />} /> : <Route path="/" element={<Navigate to="/signIn" />} />}
        <Route exact path="/presentation" element={<Presentation />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUP" element={<SignUp />} />
        <Route exact path="/aboutUS" element={<AboutUs />} />
        <Route exact path="/contactUS" element={<ContactUs />} />
        <Route exact path="/author" element={<Author />} />
      </Routes>
    </ThemeProvider>
  );
}
