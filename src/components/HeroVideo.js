import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


// this goes to feed
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { maxHeight } from '@material-ui/system';
import Img from "gatsby-image"
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";





class HeroVideo extends Component {
  render() {
    console.log("HeroVideo:", this.props)
    return (
              <div style={{
              }}>
                <Grid container justify="center" alignItems="center" style={{

                }}>
                  <div style={{
                    height: "200%",
                    width: "200%",
                    overflow: "hidden",
                    position: "fixed",
                    top: "-50%",
                    left: "-50%",
                  }}>


                    <video src={this.props.item.video.url} autoPlay loop muted playsInline style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      margin: "auto",
                      minWidth: "50%",
                      minHeight: "50%",
                      transition: "0.3s ease-in-out"
                    }} />
                  </div>

                  <h3 className="teaser" style={{
                    position: "fixed",
                    top: "calc(50vh - 4vw)",
                    width: "50%",
                    lineHeight: 0.87,
                    fontSize: "6vw",
                    textAlign: "center",
                    color: "white",
                    textShadow: "rgba(89, 89, 89, 0.95) 2px 0px 9px",
                  }}>
                    {this.props.item.description}
                  </h3>
                  <div style={{
                    position: "fixed",
                    top: "90vh",
                    width: "100%",
                    textAlign: "center",
                  }}>
                    <IconButton onClick={() => {
                      window.scrollTo({
                        top: window.innerHeight - 50,
                        behavior: 'smooth'
                      });
                    }}>
                      <KeyboardArrowDown style={{
                        transform: "scale(2)",
                      }} />
                    </IconButton>
                  </div>
                </Grid>
              </div>
              
    );
  }
}

export default HeroVideo

