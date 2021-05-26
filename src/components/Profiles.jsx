import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Profile from './ProfileCard.jsx';

const Profiles = () => {

  return (
    <Grid container spacing={4}>
      <Grid item container xs={0} sm={2} direction="column" />
      <Grid item container xs={12} sm={8} spacing={1} spacing-top={2}>
        <Grid item container xs={0} sm={12} />
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profiles;
