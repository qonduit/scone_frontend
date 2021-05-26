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

export default function OPPAboutMe() {
  const classes = useStyles();

  return (
    <body className={classes.root}>
      <div className="App-title" style={{ marginBottom: "10vh" }}>
        Design your One Page Profile
      </div>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <img
            className={classes.img}
            src={"static/opp_examples/opp-my-story.jpg"}
          />
        </Grid>
        <Grid item xs={6}>
          <div className="App-text" style={{ margin: "6vh", spacing: "2" }}>
            <p style={{ marginBottom: "6vh" }}>
              Lastly, we want to know about your life. Where were you born?
              Where did you grow up? Who are your closest friends and family?
              What are your favourite things? The more information the better!
            </p>
            <TextField
              id="outlined-multiline-static"
              label="My Story"
              multiline
              rows={6}
              defaultValue="Enter your text here and hit the 'Next' button when you're done. Don't worry, you can change this later if you want to."
              variant="outlined"
            />{" "}
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
