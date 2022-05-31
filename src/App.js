import React  from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PlayerProvider } from "./player/context/PlayerProvider";
import PlayerPage from "./player/page/PlayerPage";

const theme = createTheme({

});

function App() {
  return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PlayerProvider>
            <PlayerPage />
          </PlayerProvider>
        </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
