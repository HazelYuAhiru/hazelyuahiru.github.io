import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { ImBlog } from "react-icons/im";

const ProjectCard = (props) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={props.imgPath ? props.imgPath : "https://via.placeholder.com/150"}
        alt="card-img"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {props.ghLink && (
          <Button size="small" color="primary" href={props.ghLink} target="_blank" startIcon={<BsGithub />}>
            GitHub
          </Button>
        )}
        {props.blogLink && (
          <Button size="small" color="primary" href={props.blogLink} target="_blank" startIcon={<ImBlog />}>
            Blog
          </Button>
        )}
        {props.demoLink && (
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