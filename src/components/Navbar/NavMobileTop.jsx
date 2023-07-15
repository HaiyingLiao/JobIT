import { IconButton, AppBar, Toolbar } from "@mui/material";

import { closeIcon } from "../../assets/icons";
import Logo from "./Logo";

const NavMobileTop = ({ handleDrawer }) => {
  return (
    <>
      <AppBar
        component="nav"
        sx={{ bgcolor: "white" }}
        position="fixed"
        elevation={0}
      >
        <Toolbar
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <IconButton>
            <img
              style={{ width: "16px", height: "16px" }}
              src={closeIcon}
              alt="Mobile navigation close icon"
              onClick={handleDrawer}
              aria-label="Close Navigation Menu"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavMobileTop;
