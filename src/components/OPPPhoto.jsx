import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function OPPPhoto() {
  const classes = useStyles();

  return (
    <body className={classes.root}>
      <div className="App-title" style={{ marginBottom: "10vh" }}>Design your One Page Profile</div>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <img
            className={classes.img}
            src={"static/opp_examples/opp-photo.jpg"}
          />
        </Grid>
        <Grid item xs={6}>
          <div className="App-text" style={{ margin: "6vh" }}>
            First, choose your photo. Choose one that you like and you are
            happy for people to see!
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
              />
              <Button
                color="primary"
                variant="contained"
                component="span"
                style={{ padding: "3vh", margin: "6vh" }}
              >
                Upload photo
              </Button>
            </label>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="App-text">This is where it will go</div>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </body>
  );
}
