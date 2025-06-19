import info from "../assets/info.json"
import { Box, Typography, Paper, Divider } from "@mui/material"
import { useState, useEffect } from "react"

const Experience = () => {
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.experience-card');
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

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 로드 시에도 체크
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            id="experience-section"
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
                mb: 10
            }}
        >
            <Box sx={{ width: "100%", maxWidth: 800, textAlign: "center" }}>
                <Typography 
                    variant="h4" 
                    fontWeight={600} 
                    textAlign="center" 
                    gutterBottom
                    sx={{ mb: 4, color: "#2c3e50" }}
                >
                    Experience
                </Typography>
                
                <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: "100%" }}>
                    {info.experience.map((exp, index) => (
                        <Paper
                            key={index}
                            className="experience-card"
                            elevation={1}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                backgroundColor: "background.paper",
                                border: "1px solid #e0e0e0",
                                opacity: visibleCards.includes(index) ? 1 : 0,
                                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.6s ease-out',
                                transitionDelay: `${index * 0.1}s`,
                                textAlign: "left"
                            }}
                        >
                            <Box sx={{ mb: 2, textAlign: "left" }}>
                                <Typography variant="h6" fontWeight={600} color="#2c3e50" gutterBottom>
                                    {exp.title}
                                </Typography>
                                
                                <Typography variant="body1" color="#34495e" fontWeight={500} gutterBottom>
                                    {exp.company}
                                </Typography>
                                
                                <Typography variant="body2" color="#7f8c8d">
                                    {exp.date}
                                </Typography>
                            </Box>
                            
                            <Divider sx={{ my: 2 }} />
                            
                            <Box>
                                {exp.bullets.map((bullet, bulletIndex) => (
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
                                            color="#2c3e50"
                                            lineHeight={1.5}
                                            sx={{ textAlign: "left" }}
                                        >
                                            {bullet}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Experience