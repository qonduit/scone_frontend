import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    marginTop: "5vh",
    border: "1px",
    borderColor: "primary",
    textAlign: "Center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <p>Please log into your account:</p>
        </div>
        <div>
          <TextField id="Username" label="Username" variant="outlined" />
        </div>
        <br />
        <div>
          <TextField id="Password" type="password" label="Password" variant="outlined" />
        </div>
        <div>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
