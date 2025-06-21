import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = ({ mode, onToggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScrollToExperience = () => {
    const exp = document.getElementById("experience-section");
    if (exp) {
      exp.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  const handleScrollToProjects = () => {
    const projects = document.getElementById("projects-section");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  const handleScrollToSkills = () => {
    const skills = document.getElementById("skills-section");
    if (skills) {
      skills.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  const handleScrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: mode === "light" ? "#fff" : "#232323",
        color: mode === "light" ? "#000" : "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: { xs: 2, sm: 6 } }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            onClick={scrollToTop}
            variant="h6"
            fontWeight={700}
            letterSpacing={1}
          >
            Jimin Park
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={onToggleTheme} sx={{ mr: 1 }}>
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <IconButton color="inherit" onClick={handleMenuClick} sx={{ p: 1 }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 150,
                  backgroundColor: mode === "light" ? "#fff" : "#232323",
                  border: `1px solid ${
                    mode === "light" ? "#e0e0e0" : "#404040"
                  }`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <MenuItem
                onClick={handleScrollToExperience}
                sx={{
                  color: mode === "light" ? "#000" : "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: 1,
                }}
              >
                Experience
              </MenuItem>
              <MenuItem
                onClick={handleScrollToProjects}
                sx={{
                  color: mode === "light" ? "#000" : "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: 1,
                }}
              >
                Projects
              </MenuItem>
              <MenuItem
                onClick={handleScrollToSkills}
                sx={{
                  color: mode === "light" ? "#000" : "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: 1,
                }}
              >
                Skills
              </MenuItem>
              <MenuItem
                onClick={handleScrollToContact}
                sx={{
                  color: mode === "light" ? "#000" : "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: 1,
                }}
              >
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
                mr: 1,
              }}
              onClick={handleScrollToExperience}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
                mr: 1,
              }}
              onClick={handleScrollToProjects}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
                mr: 1,
              }}
              onClick={handleScrollToSkills}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
                mr: 1,
              }}
              onClick={handleScrollToContact}
            >
              Contact
            </Button>
            <IconButton color="inherit" onClick={onToggleTheme}>
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
