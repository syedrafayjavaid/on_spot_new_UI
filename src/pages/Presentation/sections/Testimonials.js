// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,000+ satisfied customers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Here is what our customers have to say about Onspot.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Saad Gashkorki"
              date="1 day ago"
              review="Great Plateform providing great facilities, overall it helped me a lot in finding my loved products. Services are good and efficient performance"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Arooba Jatoi"
              date="1 week ago"
              review="Great Plateform providing great facilities, overall it helped me a lot in finding my loved products. Services are good and efficient performance"
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Muhammad Khobaib"
              date="3 weeks ago"
              review="Great Plateform providing great facilities, overall it helped me a lot in finding my loved products. Services are good and efficient performance"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
