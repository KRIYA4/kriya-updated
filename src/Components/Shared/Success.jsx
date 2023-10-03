import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function Success() {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      <strong>Message has been sent successfully!!</strong>
    </Alert>
  );
}

export default Success;
