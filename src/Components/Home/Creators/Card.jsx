import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ name, image, tags, followers }) {
  return (
    <Card sx={{ minWidth: 275 }} className="col-2 m-2">
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        {tags.map((tag) => (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {tag + " "}
          </Typography>
        ))}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Followers: {followers}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={`/${name.replace(" ", "")}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
