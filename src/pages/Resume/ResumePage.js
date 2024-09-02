import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ResumeSde from "../../assets/Resume/resume-sde-717.pdf"; 
import ResumeAi from "../../assets/Resume/resume-ai-814.pdf"; 
import CustomSwitch from '../../components/CustomSwitch'; 

function ResumePage() {
  const theme = useTheme();
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
      <Grid container justifyContent="center" sx={{ position: "relative", mb: 3 }}>
        <Typography variant="h3"
          sx={{ 
            color: theme.palette.text.contrast, 
            fontWeight: "bold",
            mr: 2,
          }}> 
          Resume For
        </Typography>
        <CustomSwitch 
          checked={useAltResume} 
          onChange={handleSwitchChange} 
          option1={'AI'} 
          option2={'SDE'} 
          sx={{ mx: 2 }}
        />
        <Typography variant="h3"
          sx={{ 
            color: theme.palette.text.contrast, 
            fontWeight: "bold",
            ml: 2,
          }}>  
          Roles
        </Typography>
      </Grid>

        <Grid container justifyContent="center" sx={{ mb: 3 }}>
            <object
              data={selectedResume}
              type="application/pdf"
              width="100%"
              height={width > 786 ? `${height * 0.8}px` : `${height * 0.6}px`}
            >
              <Typography>Your browser does not support PDFs. Please download the PDF to view it :(</Typography>
            </object>
        </Grid>
      </Container>
    </Box>
  );
}

export default ResumePage;