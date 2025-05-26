import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";


 



const categories = [
  {
    id: "Overview",
    children: [
      {
        id: "DataGrid",
        icon: <HomeIcon />,
        route: "/DataGrid", // Route for Home
      },
    ],
  },
  {
    id: "Compliance",
    children: [
      {
        id: "Form",
        icon: <DynamicFormIcon />,
        route: " ", // Route for Form
      },
      {
        id: "Chart",
        icon: <ForumIcon />,
        route: " ", // Route for Messages
      },
    ],
  },
  {
    id: "Utility",
    children: [
      {
        id: "Settings",
        icon: <SettingsIcon />,
        route: " ", // Example route for Settings
      },
      {
        id: "Log Out",
        icon: <LogoutIcon />,
        route: "", // Example route for Log Out
        action: () => {
          // localStorage.removeItem("token");
          localStorage.removeItem("adminemail");
          window.location.href = "/SignIn"; // Redirect to Sign In page
        },
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function SideBarComponent(props: DrawerProps) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 19, color: "#fff" }}
        >
          Mam-laka Hub & Spoke
        </ListItem>
        {/* <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Overview</ListItemText>
        </ListItem> */}
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {/* {children.map(({ id: childId, icon, route ,action}) => (
              
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  component={RouterLink} // Use RouterLink for navigation
                  to={route} // Link to the route
                  sx={item}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))} */}
            {children.map(({ id: childId, icon, route, action }) => (
  <ListItem disablePadding key={childId}>
    <ListItemButton
      component={route ? RouterLink : "button"} // Use RouterLink if a route is provided
      to={route || undefined} // Link to the route if it exists
      sx={item}
      onClick={action ? action : undefined} // Execute the action if it exists
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{childId}</ListItemText>
    </ListItemButton>
  </ListItem>
))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
      <Box sx={{ mt: "auto" }}>
        <Copyright />
      </Box>
    </Drawer>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" align="center" sx={{ color: "white" }}>
      {"Copyright © "}
      <Link color="inherit" href="https://mam-laka.com/">
        Compliance
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}