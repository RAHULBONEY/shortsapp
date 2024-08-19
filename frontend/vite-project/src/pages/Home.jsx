import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Footer from "../Components/Footer";

const MainContent = styled(Box)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <MainContent>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom="true"
            sx={{ mr: 5 }}
          >
            Welcome to Short Creator
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom="true"
            sx={{ mr: 5 }}
          >
            Create amazing 60-second shorts with ease. Upload your videos, add
            subtitles, and generate voice narration.
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/upload"
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/about"
            >
              Learn More
            </Button>
          </Box>
        </MainContent>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
