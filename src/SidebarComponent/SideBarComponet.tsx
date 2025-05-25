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
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


type CategoryChild = {
  id: string;
  icon: React.ReactElement;
  route: string;
  action?: () => void;
  downloadUrl?: string;
};

type Category = {
  id: string;
  children: CategoryChild[];
};

const categories: Category[] = [
  // {
  //   id: "Overview",
  //   children: [
  //     {
  //       id: "Home",
  //       icon: <HomeIcon />,
  //       route: "/UserDashboard/Home", // Route for Home
  //     },
  //   ],
  // },
  {
    id: "Compliance",
    children: [
      {
        id: "Form",
        icon: <DynamicFormIcon />,
        route: "/UserDashboard/Form", // Route for Form
      },
      {
        id: "Chart",
        icon: <ForumIcon />,
        route: "/UserDashboard/Chart", // Route for Messages
      },
    ],
  },
   {
    id: "PEP Form",
    children: [
      {
        id: "Download",
        icon: <FileDownloadIcon />,
        downloadUrl: "/File/PEP Form.pdf",
        route: " ", // Route for Home
      },
    ],
  },
  {
    id: "Utility",
    children: [
      {
        id: "Settings",
        icon: <SettingsIcon />,
        route: "/settings", // Example route for Settings
      },
      {
        id: "Log Out",
        icon: <LogoutIcon />,
        route: "",
        action: () => {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
          localStorage.removeItem("name");
          window.location.href = "/SignIn"; // or use navigate('/SignIn') if you have access to the hook
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
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Mam-laka Hub & Spoke
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
           {children.map(({ id: childId, icon, route, action, downloadUrl }) => (
  <ListItem disablePadding key={childId}>
    {action ? (
      <ListItemButton onClick={action} sx={item}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{childId}</ListItemText>
      </ListItemButton>
    ) : downloadUrl ? (
      <ListItemButton
        component="a"
        href={downloadUrl}
        download
        sx={item}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{childId}</ListItemText>
      </ListItemButton>
    ) : (
      <ListItemButton component={RouterLink} to={route} sx={item}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{childId}</ListItemText>
      </ListItemButton>
    )}
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
