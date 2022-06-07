// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MKButton from "components/MKButton";
import { IconButton, CardContent } from "@mui/material";
// import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import PropTypes from "prop-types";
import axios from "axios";

// import CardContent from "assets/theme/components/card/cardContent";



function Products() {

  const [products, setProducts] = useState([]);



  // Getting All the Products
  const getProducts = async () => {
    const email = localStorage.getItem("email");

    const data = {};
    data.email = email;

    await axios
      .post('http://localhost:2000/api/recommendations', data)
      .then((res) => {

        setProducts(res.data.data);
        console.log("incoming rec resposne ", res.data.data);

      })
      .catch((err) => {
        console.log(err);
      });


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





  useEffect(() => {
    getProducts()
  }, []);



  return (
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
              Recommended For You
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              ALl Recommended Wears from junaid Jameshed and Gul Ahmed
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>

          {products.length > 0 ? (
            products.map((suggestedProducts) => (

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
                    <CardContent >
                      <MKBox p={3} mt={-1} textAlign="center" >
                        <div style={{ height: "150px" }}>
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
  );
}


export default Products;
