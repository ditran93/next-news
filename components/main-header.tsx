import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" className={classes["navbar-text"]}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                textDecoration: "none",
                color: "#fff",
                justifyContent: "left",
              }}
            >
              NEXT NEWS
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} /> 
          <Link href="/" className={classes["navbar-text"]}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
