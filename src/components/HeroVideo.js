import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

import Slide from '@material-ui/core/Slide';

class HeroVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    }
  }
  componentDidMount() {
    this.setState({ isMounted: true });
  }
  componentWillUnmount() {
    this.state.isMounted = false
  }
  render() {
    console.log("HeroVideo:", this.props)
    return (
      <Grid item xs={12} style={{ overflow: "hidden" }}>
        <Grid container justify="center" alignItems="center" spacing={3} style={{
          minHeight: "calc(100vh + 25px)",
          color: this.props.item.color != null ? this.props.item.color.hex : "white",
          textAlign: "center",
          position: "relative"
        }}>
          {this.props.item.url === true ?
            <video src={this.props.item.videoUrl} autoPlay muted loop style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              bottom: 0,
              right:0,
              width: "200%",
              height: "200%"
            }}></video>
          : <iframe style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
              src={"https://www.youtube.com/embed/vRAA8AtRqdM" + this.props.item.video.providerUid + "?& autoplay=1"}
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />}
          <Grid item xs={11} sm={8} md={4} style={{
            zIndex: 10
          }}>
            <Slide direction="up" in={this.state.isMounted} mountOnEnter unmountOnExit>
              <Typography variant="h2" gutterBottom>
                {this.props.item.description}
              </Typography>
            </Slide>
          </Grid>
          {this.props.item.showButton ?
            <Grid item xs={12} style={{
              textAlign: "center"
            }}>
              <Slide direction="up" in={this.state.isMounted} {...(this.state.isMounted ?  { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
                <IconButton onClick={() => {
                  window.scrollTo({
                    top: window.pageYOffset + window.innerHeight,
                    behavior: 'smooth'
                  });
                }}>
                  <KeyboardArrowDown style={{
                    transform: "scale(2)",
                    color: this.props.item.textcolor != null ? this.props.item.textcolor.hex : "white"
                  }} />
                </IconButton>
              </Slide>
            </Grid>
            : null}

        </Grid>
      </Grid>

    );
  }
}

export default HeroVideo

