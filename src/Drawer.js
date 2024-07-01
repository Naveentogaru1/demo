import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const Instagram = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Search", icon: <SearchIcon /> },
  { name: "Explore", icon: <ExploreIcon /> },
  { name: "Reels", icon: <SlideshowIcon /> },
  { name: "Create", icon: <AddIcon /> },
  { name: "Profile", icon: <AccountCircleIcon /> },
];

const drawerBg = "#333333"; // Dark background color
const textColor = "#ffffff"; // White text color
const hoverBg = "#444444"; // Darker hover background color
const hoverText = "#ffffff"; // White text on hover
const dividerColor = "#555555"; // Divider color

export default function PermanentDrawerRight() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: drawerBg,
          color: textColor,
          top: 64,
          height: "calc(100% - 64px)",
          right: 0,
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <List>
          {Instagram.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: hoverBg,
                    "& .MuiListItemIcon-root, & .MuiTypography-root": {
                      color: hoverText,
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: textColor, minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: '"Playwrite MX", Arial, sans-serif',
                      fontWeight: 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1, backgroundColor: dividerColor }} />
      </Box>
    </Drawer>
  );
}
