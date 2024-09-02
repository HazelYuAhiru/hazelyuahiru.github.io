import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '15px' }} >
      <CardMedia
        component="img"
        height="140"
        image={props.imgPath ? props.imgPath : "https://via.placeholder.com/150"}
        alt="card-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        { props.ghLink && (
          <Button size="small" color="primary" href={props.ghLink} target="_blank" startIcon={<BsGithub />}>
            GitHub
          </Button>
        )}
        { props.demoLink && (
          <Button
            size="small"
            color="primary"
            href={props.demoLink}
            target="_blank"
            startIcon={<CgWebsite />}
            sx={{ marginLeft: '10px' }}
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;