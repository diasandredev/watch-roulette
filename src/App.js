import React from "react";
import "./style.css";
import SearchBar from "./components/SearchBar";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="main">
      <div>
        <Paper variant="outlined" className="container">
          <img src={logo} width="200" alt="logo" />
          <header>
            <Typography variant="h4" color="textPrimary" align="center">
              WATCH ROULETTE
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="center"
            >
              lazy? let me choose for you
            </Typography>
            <SearchBar />
          </header>
        </Paper>
        <footer>
          <Typography variant="subtitle2" color="textPrimary" align="center">
            made with <span className="heart">♥</span> by{" "}
            <a href="https://github.com/diasandre">@diasandre</a>
          </Typography>
        </footer>
      </div>
    </div>
  );
}

export default App;
