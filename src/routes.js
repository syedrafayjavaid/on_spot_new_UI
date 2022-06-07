
// @mui material components
import Icon from "@mui/material/Icon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";

// Pages
import Favorite from "pages/LandingPages/Favourites";
import Recommended from "pages/LandingPages/Recommended";
import CategoriesMan from "pages/LandingPages/Categories/man";
import CategoriesWomen from "pages/LandingPages/Categories/Women";
import CategoriesKid from "pages/LandingPages/Categories/kid";
import AboutUsPage from "pages/LandingPages/AboutUs";
import ContactUs from "pages/LandingPages/ContactUs";
import ImageSearch from "pages/LandingPages/ImageSearch";
import BrandLocation from "pages/LandingPages/brandLocation"

const routes = [
  {
    name: "Favourites",
    icon: <FavoriteIcon />,
    route: "/favourites",
    component: <Favorite />,

  },
  {
    name: "Recommended Products",
    icon: <OnlinePredictionIcon />,
    route: "/recommended",
    component: <Recommended />,
  },
  {
    name: "Image Search",
    icon: <SearchIcon />,
    route: "/imageSearch",
    component: <ImageSearch />,
  },
  {
    name: "Brand's Location",
    icon: <TravelExploreIcon />,
    route: "/brandLocation",
    component: <BrandLocation />,
  },
  {
    name: "categories",
    icon: <Icon>category</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "All categories",
        collapse: [
          {
            name: "Men's Wear",
            route: "/categories/man",
            component: <CategoriesMan />,
          },
          {
            name: "Women's Wear",
            route: "/categories/women",
            component: <CategoriesWomen />,
          },
          {
            name: "Kid's Wear",
            route: "/categories/kid",
            component: <CategoriesKid />,
          },
        ],
      },
    ],
  },
  {
    name: "Information",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Contact Us",
        route: "/contactUS",
        component: <ContactUs />,
      },
      {
        name: "About Us",
        route: "/aboutUS",
        component: <AboutUsPage />,
      },
    ],
  },
];

export default routes;
