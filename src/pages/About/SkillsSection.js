import React from "react";
import { Card, CardContent, Box, Grid } from "@mui/material";
import {
  CgCPlusPlus,
} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiSwift,
  DiDocker,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiPostgresql,
  SiKubernetes,
  SiMysql,
  SiSqlite,
  SiGooglecloud,
  SiLinux,
  SiGo,
  SiTypescript,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import WordCloud from "../../components/WordCloud";

const languageSkills = [
  <DiPython />,
  <CgCPlusPlus />,
  <DiJava />,
  <SiGo />,
  <SiTypescript />,
  <SiHtml5 />,
  <SiCss3 />,
  <DiJavascript1 />,
  <DiSwift />,
];

const frameworkSkills = [
  <DiReact />,
  <SiNextdotjs />,
  <SiSvelte />,
  <SiVuedotjs />,
  <SiFlask />,
  <SiTensorflow />,
  <SiPytorch />,
  <SiNumpy />,
];

const technologySkills = [
  <DiGit />,
  <SiLinux />,
  <DiNodejs />,
  <DiDocker />,
  <SiKubernetes />,
  <SiMysql />,
  <SiPostgresql />,
  <SiSqlite />,
  <SiGooglecloud />,
];

// TODO: move these to a separate file
const languageTags = [
  { value: "LANGUAGE I USED", count: 30 },
  { value: "Python", count: 25 },
  { value: "C++", count: 20 },
  { value: "C", count: 18 },
  { value: "Java", count: 15 },
  { value: "Golang", count: 12 },
  { value: "TypeScript", count: 10 },
  { value: "HTML/CSS/JavaScript", count: 8 },
  { value: "Swift", count: 7 },
];

const frameworkTags = [
  { value: "FRAMEWORKS I USED", count: 30 },
  { value: "React.js", count: 25 },
  { value: "Next.js", count: 20 },
  { value: "Svelte", count: 18 },
  { value: "Vue.js", count: 15 },
  { value: "Three.js", count: 12 },
  { value: "Flask", count: 10 },
  { value: "TensorFlow", count: 8 },
  { value: "PyTorch", count: 7 },
  { value: "Numpy", count: 6 },
];

const technologyTags = [
  { value: "TECH I USED", count: 30 },
  { value: "Git", count: 25 },
  { value: "Linux", count: 20 },
  { value: "Docker", count: 15 },
  { value: "Kubernetes", count: 12 },
  { value: "MySQL", count: 10 },
  { value: "PostgreSQL", count: 8 },
  { value: "SQLite", count: 7 },
  { value: "Google Cloud", count: 6 },
  { value: "AWS", count: 6 },
];

function SkillsSection() {
  const theme = useTheme();
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 85,
    },
  };

  const renderSkillIcons = (skills) =>
    skills.map((IconComponent, index) => (
      <Grid item xs={4} md={3} key={index} sx={{ textAlign: "center" }}>
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={animationVariants}
        >
          <Box sx={{ fontSize: "3rem" }}>
            {IconComponent}
          </Box>
        </motion.div>
      </Grid>
    ));

  const renderSkillRow = (skills, tags, index) => {
    const isEven = index % 2 === 0;

    return (
      <Grid container spacing={4} alignItems="stretch" sx={{ marginBottom: "30px" }}>
        {isEven ? (
          <>
            <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
              <Grid container spacing={2} justifyContent="center">
                {renderSkillIcons(skills)}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  margin: "auto",
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "15px",
                  padding: "20px",
                  width: "90%",
                  height: "100%",
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <WordCloud tags={tags} />
                </CardContent>
              </Card>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  margin: "auto",
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "15px",
                  padding: "20px",
                  width: "90%",
                  height: "100%",
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <WordCloud tags={tags} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
              <Grid container spacing={2} justifyContent="center">
                {renderSkillIcons(skills)}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    );
  };

  return (
    <Box sx={{ paddingTop: "50px", width: "100%" }}>
      {renderSkillRow(languageSkills, languageTags, 0)}
      {renderSkillRow(frameworkSkills, frameworkTags, 1)}
      {renderSkillRow(technologySkills, technologyTags, 2)}
    </Box>
  );
}

export default SkillsSection;