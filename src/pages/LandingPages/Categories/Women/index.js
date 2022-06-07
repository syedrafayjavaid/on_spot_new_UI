

// @mui material components
// import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import ChatBot from "components/ChatBot/ChatBot";

// import PropTypes from "prop-types";


// About Us page sections
import Products from "pages/LandingPages/Categories/Women/sections/Products";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// import PropTypes from "prop-types";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Categories() {

  return (
    <>
      <ChatBot />
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          label: "Logout",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Products />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}






export default Categories;
