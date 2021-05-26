import React from "react";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import AccountBoxSharpIcon from "@material-ui/icons/AccountBoxSharp";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import DescriptionIcon from "@material-ui/icons/Description";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "40px 0",
    fontSize: "10px",
    textAlign: "center"
  },
  menuButton: {
    fontSize: "20px",
  },
  title: {},
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container>
            <Grid
              item
              xs={5}
              sm={4}
              style={{ textAlign: "left", padding: "10px 0", fontSize: "35px" }}
            >
              SCONE
            </Grid>
            <Grid item container xs={3} sm={5} direction="column" />
            <Grid item container xs={3}>
              <Grid item xs={3} sm={3}>
                <IconButton color="black" className={classes.menuButton}>
                  <HomeSharpIcon style={{ fontSize: 30 }} />
                </IconButton>
                Home{" "}
              </Grid>
              <Grid item xs={3} sm={3}>
                <IconButton color="black" className={classes.menuButton}>
                  <PersonIcon style={{ fontSize: 30 }} />
                </IconButton>
                Account
              </Grid>
              <Grid item xs={3} sm={3}>
                <IconButton color="black" className={classes.menuButton}>
                  <AccessAlarmIcon style={{ fontSize: 30 }} />
                </IconButton>
                Reminders{" "}
              </Grid>
              <Grid item xs={3} sm={3}>
                <IconButton color="black" className={classes.menuButton}>
                  <DescriptionIcon
                    classname="Header-icon"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>
                Documents{" "}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
