import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#fff" : "#181818",
        paper: mode === "light" ? "#fff" : "#232323",
      },
      text: {
        primary: mode === "light" ? "#000" : "#fff",
        secondary: mode === "light" ? "#666" : "#bbb",
      },
    },
    typography: {
      fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    },
  });

export default getTheme;
