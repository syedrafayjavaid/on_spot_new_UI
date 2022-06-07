// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">On Spot</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    1000+&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Customers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    2000+&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Products
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    4+&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Rating
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
              OnSpot is a free online plateform which makes shopping choices easir ansd smarter for its users.
              Onspot provides one platfrom shopping solution by gathering exciting products from different leading 
              brands like junaind jamshed and Gul Ahmed and showcase them  in a collective manner which provides
              great ease to its users.Moreover the features like Image based search make searching products lot more easier, Products
               recommendation based on user past histroy showcases the products to the users which are similar to his/her interest and 
               last but on the least location based brands search makes OnSpot one of a kind
                 <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
