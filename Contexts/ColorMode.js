import { ThemeProvider, createTheme } from "@mui/material";
import { useState, useMemo } from "react";

export function ColorModeContextProvider(props) {
  
    const mode = 'dark';
    const theme = createTheme({
      palette: {
        mode,
      },
    })
    
    return (
            <ThemeProvider theme={theme}>
              {props.children}
            </ThemeProvider>
    )
}
