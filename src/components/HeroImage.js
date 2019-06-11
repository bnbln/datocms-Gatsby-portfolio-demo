import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Slide from '@material-ui/core/Slide';




class HeroImage extends Component {
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
    console.log("HeroImage:", this.props)
    return (
      <Grid item xs={12} style={{ overflow: "hidden" }}>
        <Grid container justify="center" alignItems="center" spacing={3} style={{
          backgroundColor: this.props.item.color != null ? this.props.item.color.hex : "#33A4FF",
          backgroundImage:
            this.props.item.image != null ?
              this.props.item.image[0] ?
                "url(" + this.props.item.image[0].url + ")"
                : "none"
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "calc(100vh + 25px)",
          color: this.props.item.textcolor != null ? this.props.item.textcolor.hex : "white",
          textAlign: this.props.item.columns === true ? "left" : "center"
        }}>
          <Grid item xs={11} sm={8} md={4}>
            <Slide direction="up" in={this.state.isMounted} mountOnEnter unmountOnExit>
              <Typography variant="h1" component="h2" gutterBottom>
                {this.props.item.title}
              </Typography>
            </Slide>
            <Slide direction="up" in={this.state.isMounted} {...(this.state.isMounted ? { timeout: 500 } : {})} mountOnEnter unmountOnExit>
              <Typography variant="h2" gutterBottom>
                {this.props.item.description}
              </Typography>
            </Slide>
          </Grid>
          {this.props.item.columns  ? 
            <Grid item xs={11} sm={8} md={4}>
              <Slide direction="up" in={this.state.isMounted} {...(this.state.isMounted ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
                <Typography variant="h3" gutterBottom>
                  {this.props.item.column}
                </Typography>
              </Slide>
            </Grid>
            : null}
          {this.props.item.showButton ?
            <Grid item xs={12} style={{
              textAlign: "center"
            }}>
              <Slide direction="up" in={this.state.isMounted} {...(this.state.isMounted ? this.props.item.columns ? { timeout: 1500 } : { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
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

export default HeroImage

