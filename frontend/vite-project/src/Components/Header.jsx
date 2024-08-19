import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/CloudUpload";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 17 }}>
      <Toolbar>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          Short Creator
        </Typography>
        <StyledLink to="/">
          <HomeIcon />
          <Typography variant="body1">Home</Typography>
        </StyledLink>
        <StyledLink to="/upload" sx={{ ml: 5 }}>
          <UploadIcon />
          <Typography variant="body1">Upload</Typography>
        </StyledLink>
        <StyledLink to="/about" sx={{ ml: 5 }}>
          <InfoIcon />
          <Typography variant="body1">About</Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
