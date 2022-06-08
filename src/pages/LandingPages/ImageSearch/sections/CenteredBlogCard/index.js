
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { IconButton, CardContent } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';


// import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";
// import { Button } from "@mui/material";
import MKButton from "components/MKButton";
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from "axios";
// import Button from '@mui/material/Button';


function CenteredBlogCard({ image, title, description }) {

  /* eslint-disable array-callback-return */
  /*  eslint-disable react/jsx-no-target-blank */
  /* eslint-disable no-unused-vars */
  /* eslint-disable  no-plusplus */
  /* eslint-disable no-restricted-syntax */
  /* eslint-disable  prefer-template */

  const Input = styled('input')({
    display: 'none',
  });



  const [picture, setPicture] = useState({});
  const [casualShirts, setCasualShirts] = useState([]);
  const [queryImage, setQueryImage] = useState("");


  const onImageChange = (event) => {
    setPicture({
      /* contains the preview, if you want to show the picture to the user
           you can access it with this.state.currentPicture
       */
      picturePreview: URL.createObjectURL(event.target.files[0]),
      /* this contains the file we want to send */
      pictureAsFile: event.target.files[0],
    });
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setQueryImage(URL.createObjectURL(img));
    }
  };
  useEffect(() => {

  }, []);


  const setImageAction = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("queryImage", picture.pictureAsFile);

    console.log(picture.pictureAsFile);

    for (const key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const data = await fetch(
      "http://localhost:2000/api/image-search",
      {
        method: "post",
        body: formData,
      }
    );

    const uploadedImage = await data.json();
    console.log("the suggested products has", uploadedImage.suggestedProducts)
    setCasualShirts(uploadedImage.suggestedProducts);
    console.log(casualShirts);
    if (uploadedImage) {
      console.log("Successfully uploaded image");
    } else {
      console.log("Error Found");
    }
  };

  // add to Fav
  const addToFav = async (product) => {
    const email = localStorage.getItem("email");
    const data = product;
    data.email = email;
    console.log("insdie Product data is ", data);
    await axios
      .post("http://localhost:2000/api/products/favourite", data)
      .then((res) => {
        if (res.data.code === 0) {
          alert("Product Added to Favourite")
        }
        if (res.data.code === 1) {
          alert("Product Already In You Favourite List")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <>
      <Card>
        { /* eslint-disable no-unneeded-ternary */}
        <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
          <MKBox
            component="img"
            src={queryImage ? queryImage : image}
            alt={title}
            borderRadius="lg"
            width="100%"
            position="relative"
            zIndex={1}
          />
          <MKBox
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="100%"
            position="absolute"
            left={0}
            top={0}
            sx={{
              backgroundImage: `url(${image})`,
              transform: "scale(0.94)",
              filter: "blur(12px)",
              backgroundSize: "cover",
            }}
          />
        </MKBox>
        { /* eslint-disable no-unneeded-ternary */}
        <MKBox p={3} mt={-1} textAlign="center">
          <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
            {title}
          </MKTypography>
          <MKBox mt={1} mb={3}>
            <MKTypography variant="body2" component="p" color="text">
              {description}
            </MKTypography>
          </MKBox>
          { /* eslint-disable jsx-a11y/label-has-associated-control */}
          <label htmlFor="contained-button-file">
            <Input accept="/*" id="contained-button-file" multiple type="file" onChange={onImageChange} />
            <MKButton variant="contained" color="dark" startIcon={<CloudUploadIcon />} component="span" > Upload Image</MKButton>&nbsp;&nbsp;&nbsp;&nbsp;

          </label>
          { /* eslint-disable jsx-a11y/label-has-associated-control */}

          <MKButton variant="contained" color="dark" startIcon={<SearchIcon />} onClick={setImageAction}> Search</MKButton>
        </MKBox>
      </Card>
      <MKBox
        component="section"
        variant="gradient"
        bgColor="dark"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="white">
                All Mens Wear
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.8}>
                All the Mens wear from junaid Jameshed and Gul Ahmed
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>

            {casualShirts.length > 0 ? (
              casualShirts.map((suggestedProducts) => (

                <Grid item xs={4} lg={4}>
                  <MKBox mb={1}>
                    <Card>
                      <IconButton color="primary" onClick={() => addToFav(suggestedProducts)} style={{ zIndex: "9", left: "11vw", top: "3vh" }}>
                        <FavoriteIcon />
                      </IconButton>

                      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>

                        <MKBox
                          component="img"
                          src={suggestedProducts.imageLink}
                          alt="Image not Available"
                          borderRadius="lg"
                          width="100%"
                          position="relative"
                          zIndex={1}
                        />
                        <MKBox
                          borderRadius="lg"
                          shadow="md"
                          width="100%"
                          height="100%"
                          position="absolute"
                          left={0}
                          top={0}
                          sx={{
                            backgroundImage: `url(${suggestedProducts.imageLink})`,
                            transform: "scale(0.94)",
                            filter: "blur(12px)",
                            backgroundSize: "cover",
                          }}
                        />
                      </MKBox>
                      <CardContent>
                        <MKBox p={3} mt={-1} textAlign="center" >
                          <div style={{ minHeight: "150px" }}>
                            <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                              {suggestedProducts.title}
                            </MKTypography>
                            <MKBox mt={1} mb={3} >
                              <MKTypography variant="body2" component="p" color="text">
                                Rs : {suggestedProducts.price}
                              </MKTypography>

                            </MKBox>
                          </div>

                          <MKButton
                            style={{ marginTop: "12px" }}
                            href={suggestedProducts.productLink}
                            target="_blank"
                            rel="noreferrer"
                            variant="gradient"
                            size="small"
                            color="dark"
                          >
                            See more details
                          </MKButton>




                        </MKBox>



                      </CardContent>



                    </Card>

                    <br />
                  </MKBox>
                </Grid>


              ))
            ) : (
              <strong>Loading Products Please wait </strong>
            )}

          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
