import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    color: "#3f3f3f",
    backgroundColor: "#e6fb60",
  },
  card: {},
  media: {
    height: 140,
  },
});

const Profile = () => {
  const classes = useStyles();

  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      const resData = res.data.results[0];
      setProfileName(`${resData.name.first} ${resData.name.last}`);
      setProfileDescription(resData.location.city);
      setProfilePhoto(resData.picture.large);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          width="150"
          image={profilePhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {profileName}
          </Typography>
          <Typography variant="body2" component="p">
            {profileDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Go to full profile</Button>
        <Button size="small">Get contact details</Button>
      </CardActions>
    </Card>
  );
};

export default Profile;
