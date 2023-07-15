import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { navMenuItems } from "../../constants";

const NavMenuItems = () => {
  const [activeTabValue, setActiveTabValue] = useState(0);

  // Create underline on active menu item
  const createActiveTabBorder = (i) => {
    return i === activeTabValue ? { borderBottom: "1" } : {};
  };

  return (
    <>
      <Tabs
        textColor="primary"
        value={activeTabValue}
        sx={{ marginLeft: "auto" }}
        onChange={(_e, value) => setActiveTabValue(value)}
      >
        {navMenuItems.map((menuItem, i) => (
          <Tab
            key={menuItem}
            label={menuItem}
            sx={{
              ...{
                textTransform: "capitalize",
                fontSize: "16px",
                height: "80px",
                padding: "0px",
                marginRight: "30px",
                lineHeight: "24px",
              },
              ...createActiveTabBorder(i),
            }}
            aria-label={`Go to ${menuItem} page`}
          />
        ))}
      </Tabs>
    </>
  );
};

export default NavMenuItems;
