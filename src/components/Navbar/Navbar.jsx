import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/logo.jpg";
import { TextNavbar } from "../../styles/Text/TextNavbar";

import { Link as LinkRouter } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TADAVI TOURS
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <Button component={LinkRouter} to={"/"}>
            <TextNavbar>Home</TextNavbar>
          </Button>
        </ListItem>
        <ListItem>
          <Button component={LinkRouter} to={"/about"}>
            <TextNavbar>Qui som</TextNavbar>
          </Button>
        </ListItem>
        <ListItem>
          <Button component={LinkRouter} to={"/excursions"}>
            <TextNavbar>Excursions</TextNavbar>
          </Button>
        </ListItem>
        <ListItem>
          <Button
            href="https://www.viatgestadavi.cat/wp-content/uploads/2020/06/cataleg_hivern_23.pdf"
            target="_blank"
          >
            <TextNavbar>Catàleg</TextNavbar>
          </Button>
        </ListItem>
        <ListItem>
          <Button component={LinkRouter} to={"/"}>
            <TextNavbar>Contacte</TextNavbar>
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#1f4722", p: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            sx={{
              flexGrow: 1,

              display: { xs: "flex", md: "block" },
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="logo" width="300vw" height="auto" />
          </Grid>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button sx={{ mr: 1.9 }} component={LinkRouter} to={"/"}>
              <TextNavbar color="white">Home</TextNavbar>
            </Button>

            <Button sx={{ mr: 1.9 }} component={LinkRouter} to={"/about"}>
              <TextNavbar color="white">Qui som</TextNavbar>
            </Button>

            <Button sx={{ mr: 1.9 }} component={LinkRouter} to={"/excursions"}>
              <TextNavbar color="white">Excursions</TextNavbar>
            </Button>

            <Button
              sx={{ mr: 1.9 }}
              href="https://www.viatgestadavi.cat/wp-content/uploads/2020/06/cataleg_hivern_23.pdf"
              target="_blank"
            >
              <TextNavbar color="white">Catàleg</TextNavbar>
            </Button>

            <Button sx={{ mr: 1.9 }} component={LinkRouter} to={"/"}>
              <TextNavbar color="white">Contacte</TextNavbar>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/viatgestadavitours/"
              target="blank"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: "100vw" }}>
        <Toolbar sx={{ mt: 3 }} />
        {props.children}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
