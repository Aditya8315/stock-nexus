import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  Person,
  Logout,
  Home,
  AccountCircle,
  Settings,
  Dashboard,
} from "@mui/icons-material";
import image1 from "../assets/images/image1.png";

const Header = ({ user, onThemeToggle, darkMode }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogout = () => {
    localStorage.removeItem("uniqueId");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Sidebar for Mobile */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <List sx={{ marginTop: 2 }}>
          <ListItem button onClick={() => navigate("/")}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate("/#applications")}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItem>
          <ListItem button onClick={() => navigate("/dashboard")}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => navigate("/#settings")}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleSidebar}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Avatar
              src={image1}
              alt="Dashboard Icon"
              sx={{ width: 32, height: 32, marginRight: 1 }}
            />
            <Typography variant="h6">Stock Nexus</Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 5 }}>
              <Button color="inherit" onClick={() => navigate("/#home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/#applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={() => navigate("/#settings")}>
                Settings
              </Button>
            </Box>
          )}

          {/* Dark Mode Toggle */}
          {darkMode ? (
            <WbSunnyRoundedIcon
              onClick={onThemeToggle}
              sx={{ cursor: "pointer", marginRight: 2 }}
            />
          ) : (
            <DarkModeIcon
              onClick={onThemeToggle}
              sx={{ cursor: "pointer", marginRight: 2 }}
            />
          )}
          {/* User Section */}
          {user ? (
            <>
              {isMobile ? (
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <Avatar>
                    <Person />
                  </Avatar>
                </IconButton>
              ) : (
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  Welcome, {user.username}!
                </Typography>
              )}
              {/* Logout Button for Desktop */}
              {!isMobile && (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              )}
              {/* Mobile Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => navigate("/#profile")}>
                  <Person sx={{ marginRight: 2 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ marginRight: 2 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
