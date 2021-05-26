import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "Center",
    paddingLeft: "5vh",
    paddingRight: "5vh",
    paddingBottom: "5vh",
  },
  box: {
    border: "1px solid",
    borderColor: "black",
    padding: "2vh",
    margin: "2vh",
  },
}));

export default function OPP() {
  const classes = useStyles();

  return (
    <body>
      <div className="App-title">Design your One Page Profile</div>
      <div className={classes.root}>
        <Paper elevation={6}>
          <Grid item container alignItems="center" justify="space-between">
            <Grid item xs={12} className={classes.box}>
              My One Page Profile
            </Grid>
            <Grid
              item
              xs={4}
              className={classes.box}
              style={{ minHeight: "530px" }}
            >
              My story
            </Grid>
            <Grid item container xs={3}>
              <Grid
                item
                xs={12}
                className={classes.box}
                style={{ minHeight: "225px" }}
              >
                Photo
              </Grid>
              <Grid
                item
                xs={12}
                className={classes.box}
                style={{ minHeight: "275px" }}
              >
                About me
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              className={classes.box}
              style={{ minHeight: "530px" }}
            >
              My story
            </Grid>
          </Grid>
        </Paper>
      </div>
    </body>
  );
}
