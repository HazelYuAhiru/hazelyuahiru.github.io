import React from "react";
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, Container, Grid } from "@mui/material";
import { ImPointRight } from "react-icons/im";
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import aboutImg from "../../assets/About/aboutImg.png"; 

function AboutMeSection() {
  const theme = useTheme();

  const flyInFromLeftVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "64px" }}>
      <Grid container spacing={6} alignItems="stretch">
        <Grid item xs={12} md={8} sx={{ display: 'flex' }}> 
          <Card 
            sx={{ 
              margin: "auto", 
              backgroundColor: theme.palette.background.paper, 
              borderRadius: "15px", 
              padding: "20px",
              width: '100%',
              display: 'flex'
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                variants={flyInFromLeftVariants}
              >
                <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: "justify", fontWeight: "bold" }}>
                  Nice to meet you! I am <span style={{ color: theme.palette.secondary.main }}>Yihong(Hazel) Yu</span>
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}>
                  I am currently a 4th year undergraduate student at University of California, Irvine.
                  <br />
                  I have a major in Computer Science and a minor in Math.
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do:
                </Typography>
                <List>
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <ImPointRight style={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <Typography variant="body1">Playing Games</Typography>
                  </ListItem>
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                        <ImPointRight style={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <Typography variant="body1">Drawing</Typography>
                  </ListItem>
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <ImPointRight style={{ color: theme.palette.secondary.main }} />
                    </ListItemIcon>
                    <Typography variant="body1">Watching Anime :D</Typography>
                  </ListItem>
                </List>
                <Box sx={{ marginTop: "20px", textAlign: "center" }}>
                  <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                    "Time to Code!"
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "5px", fontStyle: "italic" }}>
                    - Hazel
                  </Typography>
                </Box>
              </motion.div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <Box
              component="img"
              src={aboutImg}
              alt="about pic"
              sx={{
                height: '100%',
                objectFit: 'contain',
                borderRadius: '10px',
                width: '100%',
                marginTop: 'auto',
              }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMeSection;