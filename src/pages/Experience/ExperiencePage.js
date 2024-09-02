import { Box } from '@mui/material';
import DisplaySection from "./DisplaySection";
import { experienceData } from "./ExperienceStatic";

function ExperiencePage() {

  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "64px",
      }}
    >
      { experienceData.map((section, index) => (
        <Box key={index} sx={{ marginBottom: "2rem" }} >
         <DisplaySection 
          title={section.title} 
          projects={section.projects} 
          positions={section.positions}
         />
        </Box>
      ))}
    </Box>
  );
}

export default ExperiencePage;