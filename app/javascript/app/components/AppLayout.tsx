import React from "react";
import { Grid } from "@mui/material";
import Routes from "@app/routes";

const AppLayout = () => {
  return (
    <Grid container direction="column">
      <Routes />
    </Grid>
  );
};

export default AppLayout;
