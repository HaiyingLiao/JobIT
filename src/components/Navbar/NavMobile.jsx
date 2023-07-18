import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";

import { hamburger, closeIcon } from "../../assets/icons";
import { navMenuItems } from "../../constants";
import Logo from "./Logo";

const NavMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

  return (
    <>
      {/* Mobile Drawer (nav menu that slides in from right on mobile)*/}
      <Drawer
        variant="temporary"
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawer}
        role="dialog"
        PaperProps={{ sx: { width: "70%" } }}
        BackdropProps={{ sx: { bgcolor: "rgba(0, 0, 0, 0.1)" } }}
      >
        <List
          sx={{
            padding: "13px",
            my: "auto",
          }}
        >
          {navMenuItems.map((menuItem) => (
            <ListItemButton
              key={menuItem}
              onClick={handleDrawer}
              sx={{ padding: "12px", lineHeight: "16px" }}
              aria-label={`Go to ${menuItem} page`}
            >
              <ListItemIcon>
                <ListItemText>{menuItem}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <Typography color="red" sx={{ padding: "12px", lineHeight: "16px" }}>
            Dark Mode
          </Typography>
        </List>
      </Drawer>

      {/* Nav Mobile Top*/}
      {!isDrawerOpen && (
        <IconButton onClick={handleDrawer} sx={{ marginRight: "auto" }}>
          <img
            src={hamburger}
            alt="Mobile navigation hamburger icon"
            aria-label="Open Navigation Menu"
            data-testid="hamburger-icon"
          />
        </IconButton>
      )}

      {!isDrawerOpen ? (
        <Typography color="red">Dark Mode</Typography>
      ) : (
        <AppBar
          component="nav"
          sx={{
            bgcolor: "white",
          }}
          position="fixed"
          elevation={0}
        >
          <Toolbar
            sx={{
              height: "70px",
            }}
          >
            <Logo />
            <IconButton sx={{ marginLeft: "auto" }}>
              <img
                style={{ width: "16px", height: "16px" }}
                src={closeIcon}
                alt="Mobile navigation close icon"
                onClick={handleDrawer}
                aria-label="Close Navigation Menu"
                data-testid="close-icon"
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default NavMobile;
