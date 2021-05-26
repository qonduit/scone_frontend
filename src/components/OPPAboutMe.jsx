import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useChangeHandler } from "./OPPBuilder.jsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function OPPAboutMe() {
  const classes = useStyles();
  // const [t1, setT1] = useState("1")
  
  // function handleChange(event) {
  //   event.preventDefault();
  //   setT1(event.target.value)
  // }
  
  return (
    <body className={classes.root}>
      <div className="App-title" style={{ marginBottom: "10vh" }}>
        Design your One Page Profile
      </div>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <img
            className={classes.img}
            src={"static/opp_examples/opp-about-me.jpg"}
          />
        </Grid>
        <Grid item xs={6}>
          <div className="App-text" style={{ margin: "6vh", spacing: "2" }}>
            <p style={{ marginBottom: "6vh" }}>
              Next, tell us a bit about yourself. What things do you
              like/dislike? In what main areas do you require support? What is
              your level of mental capacity?
            </p>
            <TextField
              id="outlined-multiline-static"
              label="About me"
              multiline
              // onChange={useChangeHandler}
              // onChange={() => {
              //   console.log(t1);
              // }}
              rows={6}
              variant="outlined"
            />
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
