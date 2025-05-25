import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import { Tabs, Tab } from "@mui/material";

const lightColor = "rgba(255, 255, 255, 0.7)";

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const name = localStorage.getItem("name");
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";

  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* Left: Menu button */}
            <Box sx={{ display: { sm: "none", xs: "block" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />
            {/* Right: Name, notifications, avatar */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: lightColor,
                  "&:hover": {
                    color: "common.white",
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                {name}
                {/* name */}
              </Link>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
              <IconButton color="secondary" sx={{ p: 0.5 }}>
                <Avatar
                  sx={{
                    bgcolor: "secondary",
                    width: 48,
                    height: 48,
                    fontSize: 24,
                  }}
                >
                  {firstLetter}
                </Avatar>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <AppBar
       component="div"
  position="sticky"
  elevation={0}
  sx={{ zIndex: 0, top: { xs: 56, sm: 64 } }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar> */}
    </React.Fragment>
  );
}
