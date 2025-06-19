import info from "../assets/info.json";
import { Typography, Box } from "@mui/material";
import CustomButton from "./CustomButton";
import meImage from '../assets/me.jpeg';

const HEADER_HEIGHT = 56;

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        px: 2,
        pt: 0,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 800, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
          {info.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#888",
            fontWeight: 600,
            letterSpacing: 1,
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            fontSize: "1.1rem"
          }}
        >
          <span role="img" aria-label="school">🎓</span>
          {info.school}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          gutterBottom
          sx={{
            mb: 2,
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
            lineHeight: 1.4,
            wordBreak: "keep-all",
            whiteSpace: "pre-line"
          }}
        >
          {Array.isArray(info.headline)
            ? info.headline.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx !== info.headline.length - 1 && <br />}
                </span>
              ))
            : info.headline}
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph sx={{ mb: 3 }}>
          {info.biography}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Box
            component="img"
            src={meImage}
            alt="Profile"
            sx={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              boxShadow: 3,
              objectFit: "cover",
              border: "4px solid #fff"
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#000000"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
          </a>
          <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#181717"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
                width:"20rem"
            }}
            >
            <Typography variant="body2" color="text.secondary">
                📍 {info.location}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <CustomButton>View Resume</CustomButton>
            </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;