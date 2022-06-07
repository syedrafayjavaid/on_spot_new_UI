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

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
// import routes from "routes";

// Images
import bgImage from "assets/images/bg3.jpg";

function SignUpBasic() {

  /* eslint-disable no-unused-vars */
  const [rememberMe, setRememberMe] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [login, setLogin] = useState(false);
  /* eslint-disable no-unused-vars */

  const nevigate = useNavigate();

  const userSignUp = async () => {
    try {
      let result = await fetch(
        "http://localhost:2000/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstName: userFirstName,
            lastName: userLastName,
            email: useremail,
            password: userPassword,
          }),
        }
      );
      result = await result.json();

      if (result.error) {
        alert(result.error);
      } else {
        alert("User Profile Created Successfully");
        nevigate("/");
      }
    } catch (error) {
      console.log("An error has occured");
    }
  }










  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign Up
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="name" label="First Name" value={userFirstName} onChange={(event) => {
                      setUserFirstName(event.target.value)
                    }} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="name" label="Last Name" value={userLastName} onChange={(event) => {
                      setUserLastName(event.target.value)
                    }} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" value={useremail} onChange={(event) => {
                      setUserEmail(event.target.value)
                    }} fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" value={userPassword} onChange={(event) => {
                      setUserPassword(event.target.value)
                    }} fullWidth />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" onClick={userSignUp} fullWidth>
                      sign up
                    </MKButton>
                    <MKBox mt={3} mb={1} textAlign="center">
                      <MKTypography variant="button" color="text">
                        Already have an account?{" "}
                        <MKTypography
                          component={Link}
                          to="/signIn"
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          Sign In
                        </MKTypography>
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignUpBasic;
