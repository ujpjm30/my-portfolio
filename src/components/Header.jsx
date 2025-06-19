import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ mode, onToggleTheme }) => {
  const handleScrollToExperience = () => {
    const exp = document.getElementById("experience-section");
    if (exp) {
      exp.scrollIntoView({ behavior: "smooth" });
    }
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
          <Typography variant="h6" fontWeight={700} letterSpacing={1}>
            Jimin Park
          </Typography>
        </Box>
        <Button
          color="inherit"
          sx={{ fontWeight: 600, fontSize: "1rem", letterSpacing: 1, mr: 1 }}
          onClick={handleScrollToExperience}
        >
          Experience
        </Button>
        <IconButton color="inherit" onClick={onToggleTheme}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
