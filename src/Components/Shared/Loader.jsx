import React from "react";
import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress style={{ width: "4rem", height: "4rem" }} />
    </Box>
  );
}

export default Loader;
