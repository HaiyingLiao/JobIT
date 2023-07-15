import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";

import { hamburger } from "../../assets/icons";
import { navMenuItems } from "../../constants";
import NavMobileTop from "./NavMobileTop";

const NavMobileDrawer = () => {
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

      {/* Mobile Top Nav */}
      <>
        {!isDrawerOpen && (
          <IconButton onClick={handleDrawer}>
            <img
              src={hamburger}
              alt="Mobile navigation hamburger icon"
              aria-label="Open Navigation Menu"
            />
          </IconButton>
        )}

        {!isDrawerOpen ? (
          <Typography color="red">Dark Mode</Typography>
        ) : (
          <NavMobileTop handleDrawer={handleDrawer} />
        )}
      </>
    </>
  );
};

export default NavMobileDrawer;
