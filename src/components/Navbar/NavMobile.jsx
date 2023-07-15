import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import hamburger from "/src/assets/icons/hamburger.png";

const pages = ["Overview", "Estimated Salaries", "Job Search"];

const NavMobile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page) => (
            <ListItemButton
              key={page}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginRight: "auto" }}
      >
        <img src={hamburger} alt="Mobile nav hamburger icon" />
      </IconButton>
    </>
  );
};

export default NavMobile;
