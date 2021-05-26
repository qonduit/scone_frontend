import React, { useState, Component } from "react";
import OPPPhoto from "./OPPPhoto.jsx";
import OPPAboutMe from "./OPPAboutMe.jsx";
import OPPMyStory from "./OPPMyStory.jsx";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import axios from "axios";

class OPPBuilder extends Component {
  constructor(props) {
    super(props);
    this.incrementStage = this.incrementStage.bind(this);
    this.state = {
      stage: 0,
      data: {
        resident_id_id: "1",
        t1: "",
        t2: "",
      },
    };
  }

  useChangeHandler = (e) => {
    let data = this.state.data;


    e.preventDefault();

    if (this.state.stage === 1) {
      data.t1 = e.target.value;
      this.setState({
        data: data,
      });
    }
    if (this.state.stage === 2) {
      data.t2 = e.target.value;
      this.setState({
        data: data,
      });
    }
    console.log(this.state.data);
    console.log(data);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = this.state.data;

    if (this.state.stage > 0) {
      axios.post("http://127.0.0.1:8000/opp-add/", { data }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }
  };

  incrementStage() {
    if (this.state.stage < 2) {
      this.setState({ stage: this.state.stage + 1 });
      console.log(this.state.stage);
      console.log(this.state.data);
    } else this.setState({ stage: 0 });
    console.log(this.state.stage);
  }

  render() {
    const stage = this.state.stage;
    let display;
    if (stage == 0) {
      display = <OPPPhoto />;
    }
    if (stage == 1) {
      display = <OPPAboutMe onChange={this.handleChange} />;
    }
    if (stage == 2) {
      display = <OPPMyStory />;
    }
    return (
      <div>
        <div>{display}</div>
        <Button
          onClick={(this.handleSubmit, this.incrementStage)}
          color="primary"
          variant="contained"
          component="span"
          style={{ padding: "3vh", margin: "6vh" }}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default OPPBuilder;
