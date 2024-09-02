import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ProjectCard from "../../components/ProjectCard"; 
import AnimatedCard from "../../components/AnimatedCard";

function DisplaySection({ title, projects, positions }) {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        sx={{
          marginBottom: "2rem",
          fontWeight: 'bold',
          color: theme.palette.text.contrast,
        }}
      >
        Experience as a
        <Typography
          variant="h3"
          sx={{ marginBottom: "2rem", fontWeight: 'bold', color: theme.palette.secondary.main }}
        >
          {title} ...
        </Typography>
      </Typography>
      <Box>
        {positions.map((news, index) => (
            <AnimatedCard
              title={news.title}
              description={news.description}
              link={news.link}
              date={news.date}
              index={index}
            />
        ))}
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgPath={project.imgPath}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              blogLink={project.blogLink}
              isBlog={project.isBlog}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplaySection;