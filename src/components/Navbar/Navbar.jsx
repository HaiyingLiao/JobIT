import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";

import Logo from "./Logo";
import NavbarMobile from "./NavbarMobile";
import NavMenuItems from "./NavMenuItems";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "white",
          zIndex: "2000",
          px: isMobile ? "0" : "78px",
        }}
        position="fixed"
        elevation={1}
      >
        <Toolbar
          sx={{
            height: isMobile ? "70px" : "80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isMobile ? (
            <NavbarMobile />
          ) : (
            <>
              <Logo />
              <NavMenuItems />
              <Box sx={{ ml: "auto" }} color="red">
                Dark Mode
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
