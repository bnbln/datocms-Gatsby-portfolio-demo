import React, { Component } from 'react';
import lottie from "lottie-web";
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';




class HeroAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    }
  }
  componentDidMount() {
    this.setState({ isMounted: true });
    lottie.loadAnimation({
      container: document.getElementById('animationContainer1'), // the dom element that will contain the animation
      renderer: 'svg',
      rendererSettings: {
        preserveAspectRatio: "xMinYMid slice",

        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
      },
      loop: true,
      autoplay: true,
      animationData: this.props.item.animation
    });
  }

  componentWillUnmount() {
    this.state.isMounted = false
  }

  render() {
    console.log(this.props)
    return (
      <Grid container justify="center" alignItems="center" style={{ height: "100vh", position: "relative" }}>
        <Grid item xs={11} sm={6} md={4} lg={3} xl={2} style={{
          position: "absolute",
          zIndex: 100,
          textAlign: "center",
          color: this.props.item.color != null ? this.props.item.color.hex : "inherit"
        }}>
          <Slide direction="up" in={this.state.isMounted} mountOnEnter unmountOnExit>
            <Typography variant="h2" gutterBottom>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.item.descriptionNode.childMarkdownRemark.html
                }}
              />
            </Typography>
          </Slide>
          {this.props.item.showButton ? 
            <Slide direction="up" in={this.state.isMounted} {...(this.state.isMounted ? { timeout: 500 } : {})} mountOnEnter unmountOnExit>
              <IconButton onClick={() => {
                window.scrollTo({
                  top: window.pageYOffset + window.innerHeight ,
                  behavior: 'smooth'
                });
              }}>
                <KeyboardArrowDown style={{
                  transform: "scale(2)",
                  color: this.props.item.color != null ? this.props.item.color.hex : "inherit"
                }} />
              </IconButton>
            </Slide>
          : null}
        </Grid>
        <Grid item xs={12} id="animationContainer1" style={{ height: "100vh", position: "absolute", top: 0, left: 0, width: "100%" }}>

        </Grid>
      </Grid>
    )
  }
}

export default HeroAnimation;
