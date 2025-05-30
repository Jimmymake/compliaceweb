import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import AdminSidebar from '../AdminHeader/AdminHeader';
// import AdminSideBarComponent from '../AdminSideBar/AdminSideBar'
import Header from '../AdminHeader/AdminHeader'
// import { Route,Router,Routes } from 'react-router-dom';
// import Home from '../Home'
// // import 
// import FormTab from '../FormTab';
// import Messages from '../Messages'
// import { BrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

// import * as React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// // import Navigator from '../SidebarComponent/SideBarComponet';
// import SideBarComponent from '../SidebarComponent/SideBarComponet';
// import Header from '../Header/Header';
// import { Route,Router,Routes } from 'react-router-dom';
// import Home from '../Home/Home';
// import FormTab from '../FormTab/FormTab';
// // import Messages from '../Messages/Messages';
// import { Outlet } from "react-router-dom";
// import Messages from '../Messages/Messages';
// import AdminmainPage from '../ADMIN/AdminMainPage/AdminMainPage'
// import { BrowserRouter } from 'react-router-dom';

// function Copyright() {
//   return (
//     <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mam-laka.com//">
//         Compliance
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 256;

export default function UserMainpage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    // <BrowserRouter>

      <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <AdminSideBar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <AdminSideBar
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
           <Box component="main" sx={{ flex: 1, py: 0.5, px: 0.5, bgcolor: '#eaeff1' }}>
            <Outlet></Outlet>
              {/* <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/FormTab" element={<FormTab />} />
                <Route path="/Messages" element={<Messages />} />

              </Routes> */}
            </Box>
        </Box>
      </Box>
    </ThemeProvider>
    // </BrowserRouter>
    
  );
}