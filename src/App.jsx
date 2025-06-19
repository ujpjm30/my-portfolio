import { useState } from 'react'
import './App.css'
import theme from "./theme"
import { Box, ThemeProvider, CssBaseline} from '@mui/material'
import CustomButton from './components/CustomButton'
import Hero from './components/Hero'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box>
        Hi, I am Jimin Park.
      </Box>
      <Hero/>
    </ThemeProvider>
  )
}

export default App
