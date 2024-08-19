import React from "react";
import Header from "../Components/Header";
import { Box, Button, Container, Typography } from "@mui/material";
import Footer from "../Components/Footer";

const Upload = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          padding: "20px",
          borderRadius: "10px",
          color: "black",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Upload your video and story
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            marginBottom: "20px",
            padding: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            border: "1px solid #e0e0e0",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Upload your video
          </Typography>
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#3f51b5",
              color: "white",
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            Choose Video
            <input type="file" hidden />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            padding: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            border: "1px solid #e0e0e0",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Upload your subtitles
          </Typography>
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#3f51b5",
              color: "white",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
            }}
          >
            Choose Subtitles
            <input type="file" hidden />
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3f51b5",
            color: "white",
            "&:hover": {
              backgroundColor: "#303f9f",
            },
          }}
        >
          Upload
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Upload;
