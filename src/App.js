import { Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import DrawerAppBar from "./components/Navbar/Navbar";
import { About } from "./Pages/About";
import { ExcursionsPage } from "./Pages/ExcursionsPage";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <Grid
      container
      sx={{
        width: "100vw",

        backgroundColor: "rgba(0,0,0, .02)",
        m: 0,
        p: 0,
      }}
    >
      <BrowserRouter>
        <DrawerAppBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/excursions" element={<ExcursionsPage />} />
          </Routes>

          <Footer />
        </DrawerAppBar>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
