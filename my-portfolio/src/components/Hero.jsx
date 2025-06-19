import info from "../assets/info.json";
import { Typography, Box, Container } from "@mui/material";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff", // ✅ 흰색 배경
        color: "#000000",           // ✅ 텍스트 검정
        minHeight: "100vh",
        py: 10,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={700} gutterBottom>
          {info.name}
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom>
          {info.headline}
        </Typography>

        <Typography variant="body1" color="text.primary" paragraph>
          {info.biography}
        </Typography>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", // ✅ 너가 요청한 포인트
                alignItems: "center",
                mt: 4,
                width:"20rem"
            }}
            >
            <Typography variant="body2" color="text.secondary">
                📍 {info.location}
            </Typography>
            <CustomButton>View Resume</CustomButton>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;