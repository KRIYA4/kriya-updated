import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Card.css'
export default function BasicCard({ name, bio,image }) {
  return (
    <Card
      sx={{ minWidth: 275, "&:hover": { cursor: "pointer" } }}
      className="col-2 m-2"
     
    >
      <CardContent>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
          className="cardmedia"
        />
        <Typography variant="h5" component="div" sx={{ mt: 1.5 }}>
          {name}
        </Typography>
        {/* {tags.map((tag, index) => (
          <Typography key={index} sx={{ mb: 1.5 }} color="text.secondary">
            {tag + " "}
          </Typography>
        ))} */}
        <Typography color="text.secondary">Bio : {bio}</Typography>
      </CardContent>
      <CardActions>
        <Button href={`/${name}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
