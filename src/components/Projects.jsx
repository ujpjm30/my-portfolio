import info from "../assets/info.json";
import { Box, Typography, Paper, Chip, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SlideshowIcon from "@mui/icons-material/Slideshow";

const Projects = () => {
  const theme = useTheme();
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".project-card");
      const windowHeight = window.innerHeight;
      const newVisibleCards = [];

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = cardTop < windowHeight * 0.8;

        if (cardVisible) {
          newVisibleCards.push(index);
        }
      });

      setVisibleCards(newVisibleCards);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkIcon = (linkKey) => {
    switch (linkKey) {
      case "github":
        return (
          <GitHubIcon
            sx={{
              fontSize: 18,
              color: (theme) =>
                theme.palette.mode === "light" ? "#333" : "#fff",
            }}
          />
        );
      case "pdf":
        return (
          <PictureAsPdfIcon
            sx={{
              fontSize: 18,
              color: (theme) =>
                theme.palette.mode === "light" ? "#333" : "#fff",
            }}
          />
        );
      case "ppt":
        return (
          <SlideshowIcon
            sx={{
              fontSize: 18,
              color: (theme) =>
                theme.palette.mode === "light" ? "#333" : "#fff",
            }}
          />
        );
      default:
        return (
          <LaunchIcon
            sx={{
              fontSize: 18,
              color: (theme) =>
                theme.palette.mode === "light" ? "#333" : "#fff",
            }}
          />
        );
    }
  };

  const handleLinkClick = (e, link) => {
    e.stopPropagation();
    if (link && link !== "#") {
      window.open(link, "_blank");
    }
  };

  const getProjectLinks = (project) => {
    const links = {};

    if (project.links) {
      Object.assign(links, project.links);
    }

    if (project.link) {
      links["main"] = project.link;
    }

    return links;
  };

  const getThumbnailImage = (project) => {
    return project.thumbnail;
  };

  return (
    <Box
      id="projects-section"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 8,
        mb: 10,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
          sx={{ mb: 6, color: "text.primary" }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
            width: "100%",
          }}
        >
          {info.projects.map((project, index) => {
            const projectLinks = getProjectLinks(project);
            const hasLinks = Object.keys(projectLinks).length > 0;

            return (
              <Paper
                key={index}
                className="project-card"
                elevation={2}
                sx={{
                  p: 0,
                  borderRadius: 3,
                  backgroundColor: "background.paper",
                  border: (theme) =>
                    `1px solid ${
                      theme.palette.mode === "light" ? "#e0e0e0" : "#404040"
                    }`,
                  opacity: visibleCards.includes(index) ? 1 : 0,
                  transform: visibleCards.includes(index)
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: "all 0.6s ease-out",
                  transitionDelay: `${index * 0.1}s`,
                  overflow: "hidden",
                  cursor: hasLinks ? "pointer" : "default",
                  "&:hover": {
                    transform: visibleCards.includes(index)
                      ? "translateY(-8px)"
                      : "translateY(30px)",
                    boxShadow: (theme) =>
                      theme.palette.mode === "light"
                        ? "0 8px 25px rgba(0,0,0,0.15)"
                        : "0 8px 25px rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() => {
                  if (hasLinks) {
                    const firstLink = Object.values(projectLinks)[0];
                    if (firstLink && firstLink !== "#") {
                      window.open(firstLink, "_blank");
                    }
                  }
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 280,
                    backgroundImage: `url(${getThumbnailImage(project)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) =>
                        theme.palette.mode === "light"
                          ? "linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)"
                          : "linear-gradient(135deg, rgba(52, 152, 219, 0.2) 0%, rgba(155, 89, 182, 0.2) 100%)",
                      opacity: 0.8,
                    },
                  }}
                >
                  {hasLinks && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {Object.entries(projectLinks).map(
                        ([key, link], linkIndex) => (
                          <Box
                            key={linkIndex}
                            onClick={(e) => handleLinkClick(e, link)}
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "50%",
                              backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                  ? "rgba(255,255,255,0.9)"
                                  : "rgba(0,0,0,0.7)",
                              border: (theme) =>
                                `1px solid ${
                                  theme.palette.mode === "light"
                                    ? "#000"
                                    : "#fff"
                                }`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backdropFilter: "blur(10px)",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                backgroundColor: (theme) =>
                                  theme.palette.mode === "light"
                                    ? "rgba(255,255,255,1)"
                                    : "rgba(0,0,0,0.9)",
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            {getLinkIcon(key)}
                          </Box>
                        )
                      )}
                    </Box>
                  )}
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    {project.name}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {project.description.bullets.map((bullet, bulletIndex) => (
                      <Box
                        key={bulletIndex}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          mb: 1.5,
                          "&:last-child": { mb: 0 },
                          textAlign: "left",
                        }}
                      >
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            backgroundColor: "#3498db",
                            mt: 1.2,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          lineHeight={1.6}
                          sx={{
                            fontSize: "0.875rem",
                            textAlign: "left",
                          }}
                        >
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* 기술 스택 칩들 */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.skills &&
                      project.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === "light"
                                ? "#E5E7EB"
                                : "#4B5563",
                            color: (theme) =>
                              theme.palette.mode === "light"
                                ? "#374151"
                                : "#F9FAFB",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
