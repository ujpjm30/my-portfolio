import { Box, Typography, Chip, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import DataObjectIcon from '@mui/icons-material/DataObject';
import FunctionsIcon from '@mui/icons-material/Functions';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MemoryIcon from '@mui/icons-material/Memory';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TuneIcon from '@mui/icons-material/Tune';
import ScienceIcon from '@mui/icons-material/Science';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChatIcon from '@mui/icons-material/Chat';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ConstructionIcon from '@mui/icons-material/Construction';
import BoltIcon from '@mui/icons-material/Bolt';
import GridOnIcon from '@mui/icons-material/GridOn';
import PetsIcon from '@mui/icons-material/Pets';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BookIcon from '@mui/icons-material/Book';
import SyncIcon from '@mui/icons-material/Sync';
import EngineeringIcon from '@mui/icons-material/Engineering';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Skills = () => {
    const theme = useTheme();
    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.skills-section');
            const windowHeight = window.innerHeight;
            const newVisibleSections = [];
            
            sections.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = sectionTop < windowHeight * 0.8;
                
                if (sectionVisible) {
                    newVisibleSections.push(index);
                }
            });
            
            setVisibleSections(newVisibleSections);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skillCategories = [
        {
            title: "Languages",
            icon: <CodeIcon />,
            skills: [
                { name: "Python", color: "#3776AB", icon: <LanguageIcon /> },
                { name: "SQL", color: "#336791", icon: <DataObjectIcon /> },
                { name: "R", color: "#276DC3", icon: <FunctionsIcon /> }
            ]
        },
        {
            title: "Machine Learning",
            icon: <PsychologyIcon />,
            skills: [
                { name: "Deep Learning", color: "#FF6B6B", icon: <AutoAwesomeIcon /> },
                { name: "Knowledge Distillation", color: "#4ECDC4", icon: <MemoryIcon /> },
                { name: "TinyML", color: "#45B7D1", icon: <SmartToyIcon /> },
                { name: "Transfer Learning", color: "#96CEB4", icon: <SwapHorizIcon /> },
                { name: "Hyper-parameter Tuning", color: "#E67E22", icon: <TuneIcon /> },
                { name: "A/B Testing", color: "#9B59B6", icon: <ScienceIcon /> },
                { name: "Model Monitoring", color: "#27AE60", icon: <TrendingUpIcon /> },
                { name: "NLP", color: "#F39C12", icon: <ChatIcon /> }
            ]
        },
        {
            title: "Libraries / Frameworks",
            icon: <BuildIcon />,
            skills: [
                { name: "PyTorch", color: "#EE4C2C", icon: <LocalFireDepartmentIcon /> },
                { name: "Transformers", color: "#E67E22", icon: <AutoAwesomeIcon /> },
                { name: "Scikit-learn", color: "#F7931E", icon: <ConstructionIcon /> },
                { name: "PySpark", color: "#E25A1C", icon: <BoltIcon /> },
                { name: "NumPy", color: "#4DABCF", icon: <GridOnIcon /> },
                { name: "Pandas", color: "#130654", icon: <PetsIcon /> }
            ]
        },
        {
            title: "Tools / Platforms",
            icon: <CloudIcon />,
            skills: [
                { name: "AWS QuickSight", color: "#FF9900", icon: <DashboardIcon /> },
                { name: "GitHub Actions", color: "#2088FF", icon: <GitHubIcon /> },
                { name: "CUDA", color: "#76B900", icon: <SportsEsportsIcon /> },
                { name: "Jupyter", color: "#F37626", icon: <BookIcon /> }
            ]
        },
        {
            title: "Data Engineering",
            icon: <StorageIcon />,
            skills: [
                { name: "ETL", color: "#FF6B35", icon: <SyncIcon /> },
                { name: "Feature Engineering", color: "#7209B7", icon: <EngineeringIcon /> },
                { name: "Data Integration", color: "#4361EE", icon: <IntegrationInstructionsIcon /> },
                { name: "CI/CD", color: "#F72585", icon: <RocketLaunchIcon /> },
                { name: "Feature Store", color: "#4CC9F0", icon: <StorefrontIcon /> }
            ]
        }
    ];

    return (
        <Box
            id="skills-section"
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
                mb: 10
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
                    Skills
                </Typography>
                
                <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {skillCategories.map((category, categoryIndex) => (
                        <Box
                            key={categoryIndex}
                            className="skills-section"
                            sx={{
                                opacity: visibleSections.includes(categoryIndex) ? 1 : 0,
                                transform: visibleSections.includes(categoryIndex) ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.6s ease-out',
                                transitionDelay: `${categoryIndex * 0.1}s`,
                            }}
                        >
                            <Box 
                                sx={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    gap: 2, 
                                    mb: 3,
                                    justifyContent: { xs: "center", md: "flex-start" }
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        backgroundColor: (theme) => theme.palette.mode === 'light' 
                                            ? 'rgba(52, 152, 219, 0.1)' 
                                            : 'rgba(52, 152, 219, 0.2)',
                                        color: "#3498db",
                                        mb: { xs: 1, md: 0 }
                                    }}
                                >
                                    {category.icon}
                                </Box>
                                <Typography 
                                    variant="h5" 
                                    fontWeight={600} 
                                    color="text.primary"
                                    sx={{ 
                                        textAlign: { xs: "center", md: "left" },
                                        width: { xs: "100%", md: "auto" }
                                    }}
                                >
                                    {category.title}
                                </Typography>
                            </Box>
                            
                            <Box 
                                sx={{ 
                                    display: "flex", 
                                    flexWrap: "wrap", 
                                    gap: 2,
                                    justifyContent: { xs: "center", md: "flex-start" }
                                }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        icon={
                                            <Box sx={{ 
                                                display: "flex", 
                                                alignItems: "center",
                                                color: "inherit"
                                            }}>
                                                {skill.icon}
                                            </Box>
                                        }
                                        label={skill.name}
                                        size="medium"
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.mode === 'light' 
                                                ? `${skill.color}20` 
                                                : `${skill.color}30`,
                                            color: (theme) => theme.palette.mode === 'light' 
                                                ? skill.color 
                                                : '#fff',
                                            border: (theme) => `1px solid ${theme.palette.mode === 'light' 
                                                ? `${skill.color}40` 
                                                : `${skill.color}50`}`,
                                            fontWeight: 500,
                                            fontSize: "0.9rem",
                                            px: 1,
                                            py: 0.5,
                                            "& .MuiChip-icon": {
                                                color: "inherit",
                                                fontSize: "1.1rem"
                                            },
                                            "&:hover": {
                                                backgroundColor: (theme) => theme.palette.mode === 'light' 
                                                    ? `${skill.color}30` 
                                                    : `${skill.color}40`,
                                                transform: "translateY(-2px)",
                                                boxShadow: (theme) => theme.palette.mode === 'light'
                                                    ? `0 4px 12px ${skill.color}40`
                                                    : `0 4px 12px ${skill.color}20`,
                                                transition: "all 0.3s ease"
                                            },
                                            transition: "all 0.3s ease"
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;