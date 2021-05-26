import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    marginTop: "5vh",
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
    },
  },
}));

export default function NewResident() {
  const classes = useStyles();
  const { handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  // const handleChange = (event) => {
  //   setState(event.target.value);
  // };

  return (
    <body className={classes.root}>
      <p className="App-title">Please enter the details for the new resident</p>
      <Grid container spacing={4}>
        <Grid item container xs={0} sm={2} direction="column" />
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12} sm={6}>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <p>Resident's name, date of birth and scheme</p>
                </div>
                <div>
                  <TextField
                    id="FirstName"
                    label="First name"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="MiddleNames"
                    label="Middle names"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="LastName"
                    label="Last name"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="DOB"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Date of birth"
                    type="date"
                    variant="outlined"
                  />
                </div>
              </form>
            </div>
            <div>
              <Controller
                as={
                  <TextField>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Mandalay">Mandalay </MenuItem>
                    <MenuItem value="Cornell">Cornell </MenuItem>
                    <MenuItem value="NGC">NGC </MenuItem>
                    <MenuItem value="Almshouses">Almshouses </MenuItem>
                  </TextField>
                }
                name="selectscheme"
                rules={{ required: "this is required" }}
                control={control}
                label="Select your scheme"
                defaultValue=""
                select
                variant="outlined"
                helperText="If you would like more info about your scheme,
                including details such as the scheme address,
                please speak with the staff at the scheme."
              />{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <p>Resident's previous address</p>
                </div>
                <div>
                  <TextField
                    id="Address1"
                    label="Address 1"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="Address2"
                    label="Address 2"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="Address3"
                    label="Address 3"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="Address4"
                    label="Address 4"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="Postcode"
                    label="Postcode"
                    variant="outlined"
                  />
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={0} sm={2} direction="column" />
      </Grid>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "2vh", padding: "2vh" }}
      >
        Submit to scheme manager
      </Button>
    </body>
  );
}
