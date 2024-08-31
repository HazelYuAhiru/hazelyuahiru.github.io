import React, { useState, useEffect } from "react";
import { Container, Box, Button, Grid2, Typography, Switch, FormControlLabel } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import ResumeSde from "../../assets/resume-sde-717.pdf"; 
import ResumeAi from "../../assets/resume-ai-814.pdf"; 

function ResumePage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [useAltResume, setUseAltResume] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const handleSwitchChange = () => {
    setUseAltResume(!useAltResume);
  };

  const selectedResume = useAltResume ? ResumeAi : ResumeSde;

  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "64px",
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container justifyContent="center" sx={{ position: "relative", mb: 3 }}>
          <Typography variant="h4">SDE Roles</Typography>
          <FormControlLabel
            control={<Switch checked={useAltResume} onChange={handleSwitchChange} />}
          />
          <Typography variant="h4">AI Roles</Typography>
        </Grid2>

        <Grid2 container justifyContent="center" sx={{ position: "relative", mb: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href={selectedResume}
            target="_blank"
            startIcon={<AiOutlineDownload />}
            sx={{ maxWidth: "250px" }}
          >
            Download Resume
          </Button>
        </Grid2>

        <Grid2 container justifyContent="center" sx={{ mb: 3 }}>
            <object
              data={selectedResume}
              type="application/pdf"
              width="100%"
              height={width > 786 ? `${height * 0.8}px` : `${height * 0.6}px`}
            >
              <Typography>Your browser does not support PDFs. Please download the PDF to view it :(</Typography>
            </object>
        </Grid2>
      </Container>
    </Box>
  );
}

export default ResumePage;