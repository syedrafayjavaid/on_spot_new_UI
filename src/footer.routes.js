// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "One Spot",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "/presentation",
    },
    {
      icon: <TwitterIcon />,
      link: "/presentation",
    },
    {
      icon: <GitHubIcon />,
      link: "/presentation",
    },
    {
      icon: <YouTubeIcon />,
      link: "/presentation",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "contact us", href: "https://www.creative-tim.com/presentation" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "Junaid Jamshed", href: "https://www.junaidjamshed.com" },
        { name: "Gul Ahmed", href: "https://www.gulahmedshop.com" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "Help Centerer", href: "#" },
        { name: "knowledge center", href: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/presentation" },
        { name: "privacy policy", href: "/presentation" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} On Spot by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Khobaib & Hafeez
      </MKTypography>
      .
    </MKTypography>
  ),
};
