import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import logoText from "/logo-text.png";
import logoIcon from "/logo-icon.png";

const Logo = () => {
  return (
    <>
      <Box
        sx={{
          height: "22px",
          display: "flex",
          gap: "6px",
          padding: "2px 1px 0px 2px",
        }}
      >
        <Link to="/" aria-label="Go to Home Page">
          <img
            style={{
              height: "20px",
            }}
            src={logoIcon}
            alt="JobIt logo icon"
          />
        </Link>
        <Link to="/" aria-label="Go to Home Page">
          <img
            style={{ height: "15px" }}
            src={logoText}
            alt="JobIt logo text"
          />
        </Link>
      </Box>
    </>
  );
};

export default Logo;
