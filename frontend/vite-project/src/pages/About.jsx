import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Link,
} from "@mui/material";
import Header from "../Components/Header";
import InfoIcon from "@mui/icons-material/Info";
import TeamIcon from "@mui/icons-material/Group";
import FeatureIcon from "@mui/icons-material/Star";
import { styled } from "@mui/system";

// Assuming Header height is 60px; adjust accordingly
const headerHeight = "60px";

const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  min-height: calc(100vh - ${headerHeight});
  padding: 20px;
  padding-top: 0px;
`;

const GradientPaper = styled(Paper)`
  background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

const About = () => {
  return (
    <>
      <Header />
      <GradientBackground>
        <Container>
          <Box mt={4} textAlign="center">
            <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 2 }}>
              <InfoIcon />
            </Avatar>
            <Typography variant="h4" component="h1" gutterBottom>
              About Short Creator
            </Typography>
            <Typography variant="body1" paragraph>
              Short Creator is a powerful and easy-to-use web application that
              allows users to create amazing 60-second shorts. With features
              like video upload, subtitle addition, and voice narration
              generation, anyone can produce professional-quality content
              effortlessly.
            </Typography>
          </Box>

          <Box mt={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <GradientPaper elevation={3}>
                  <Avatar sx={{ bgcolor: "secondary.main", mx: "auto", mb: 2 }}>
                    <FeatureIcon />
                  </Avatar>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Features
                  </Typography>
                  <Typography variant="body1">
                    - Video Upload
                    <br />
                    - Subtitle Addition
                    <br />
                    - Voice Narration
                    <br />- User-Friendly Interface
                  </Typography>
                </GradientPaper>
              </Grid>
              <Grid item xs={12} md={4}>
                <GradientPaper elevation={3}>
                  <Avatar sx={{ bgcolor: "secondary.main", mx: "auto", mb: 2 }}>
                    <TeamIcon />
                  </Avatar>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Made By-
                  </Typography>
                  <Typography variant="body1">Rahul Boney</Typography>
                </GradientPaper>
              </Grid>
              <Grid item xs={12} md={4}>
                <GradientPaper elevation={3}>
                  <Avatar sx={{ bgcolor: "secondary.main", mx: "auto", mb: 2 }}>
                    <InfoIcon />
                  </Avatar>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant="body1">
                    Email:{" "}
                    <Link
                      href="mailto:rahulboney14@gmail.com?cc=rahulboney14@gmail.com"
                      color="inherit"
                    >
                      rahulboney14@gmail.com
                    </Link>
                  </Typography>
                </GradientPaper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </GradientBackground>
    </>
  );
};

export default About;
