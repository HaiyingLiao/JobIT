import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import logoText from "/logo-text.png";
import logoIcon from "/logo-icon.png";
import NavMobile from "./NavMobile";

const pages = ["Overview", "Estimated Salaries", "Job Search"];

const NavBar = () => {
  const [activeTabValue, setActiveTabValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMobile);

  // Create underline on active menu item
  const createActiveTabBorder = (i) => {
    return i === activeTabValue ? { borderBottom: "1" } : {};
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{ bgcolor: "white" }}
        position="fixed"
        elevation={1}
      >
        <Toolbar
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isMobile ? (
            <>
              <NavMobile />
              <Typography color="red">Dark Mode</Typography>
            </>
          ) : (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link to="/" className="">
                  <img
                    style={{ marginRight: "6px" }}
                    src={logoIcon}
                    alt="JobIt logo icon"
                  />
                </Link>
                <Link to="/" className="">
                  <img className="" src={logoText} alt="JobIt logo text" />
                </Link>
              </Box>
              <Tabs
                disablePadding
                textColor="primary"
                value={activeTabValue}
                sx={{ marginLeft: "auto" }}
                onChange={(e, value) => setActiveTabValue(value)}
              >
                {pages.map((page, i) => (
                  <Tab
                    key={page}
                    label={page}
                    sx={{
                      ...{
                        textTransform: "capitalize",
                        fontSize: "16px",
                        height: "80px",
                      },
                      ...createActiveTabBorder(i),
                    }}
                  />
                ))}
              </Tabs>
              <Box sx={{ ml: "auto" }} color="red">
                Dark Mode
              </Box>
            </>
          )}

          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" className="">
              <img
                style={{ marginRight: "6px" }}
                src={logoIcon}
                alt="JobIt logo icon"
              />
            </Link>
            <Link to="/" className="">
              <img className="" src={logoText} alt="JobIt logo text" />
            </Link>
          </Box>
          <Tabs
            disablePadding
            textColor="primary"
            value={activeTabValue}
            sx={{ marginLeft: "auto" }}
            onChange={(e, value) => setActiveTabValue(value)}
          >
            {navItems.map((item, i) => (
              <Tab
                key={item}
                label={item}
                sx={{
                  ...{
                    textTransform: "capitalize",
                    fontSize: "16px",
                    height: "80px",
                  },
                  ...createActiveTabBorder(i),
                }}
              />
            ))}
          </Tabs>
          <Box sx={{ ml: "auto" }} color="red">
            Dark Mode
          </Box>  */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
