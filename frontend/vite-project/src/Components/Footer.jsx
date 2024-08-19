import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        width: "100%",
        padding: "20px 0",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography variant="body2" color="textSecondary" align="center">
            {"© "}

            {new Date().getFullYear()}
            {"."}
          </Typography>
          <Box>
            <Link
              href="/about"
              color="inherit"
              sx={{ mx: 1, textDecorationLine: "none" }}
            >
              About Us
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
