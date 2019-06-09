import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Lottie from "./Lottie"
import HeroVideo from "./HeroVideo"


// this goes to feed
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { maxHeight } from '@material-ui/system';
import Img from "gatsby-image"
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";





class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(item) {
    console.log(item.title)
    this.setState({
      open: !this.state.open,
      active: item
    })
  }
  render() {
    console.log("Home:", this.props)
    var active = this.state.active
    console.log("active:", active)
    return (
      <Grid container justify="center" alignItems="center" style={{
        overflow: "hidden"
      }}>
        <Grid item xs={12}>
          {this.props.data.allDatoCmsFrontpage.edges[0].node.header.map((item, i) =>
            item.__typename === "DatoCmsHeroVideo" ?
              <HeroVideo item={item} key={i} />
            : item.__typename === "DatoCmsHeroImage" ?
              <img></img>
            : item.__typename === "DatoCmsHeroAnimation" ?
              <Lottie item={item} key={i} />
            : null
          )}

          
        </Grid>
        <Grid item xs={12} style={{ overflow: "hidden" }}>
          <Grid container justify="center" alignItems="center" spacing={3} style={{ backgroundColor: "#33a4ff", minHeight: "100vh" }}>
            <Grid item xs={11} sm={8} md={4}>
              <Typography variant="h1" component="h2" gutterBottom>
                h1. Heading
      </Typography>
              <Typography variant="h2" gutterBottom>
                h2. Heading
      </Typography>

            </Grid>
            <Grid item xs={11} sm={8} md={4}>
              <Typography variant="h3" gutterBottom>
                h3. Heading
      </Typography>
              <Typography variant="h4" gutterBottom>
                h4. Heading
      </Typography>
              <Typography variant="h5" gutterBottom>
                h5. Heading
      </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} style={{
          marginTop: 75
        }}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            {this.props.data.allDatoCmsArticleVideo.edges.map((item, i) =>
                <Grid item xs={12} sm={6} md={6} xl={4} key={i} onClick={() => this.handleClick(item.node)}>
                  <FeedImage item={item.node} />
                </Grid>
            )}

          </Grid>
          <Grid container justify="center" alignItems="center" style={{
            maxHeight: "100vh",
            overflow: "hidden"
          }}>
            <Grid item xs={9}>
              <Modal
                open={this.state.open}
                onClose={this.handleClick}
                style={{
                  width: "auto",
                  margin: "1rem",
                  height: "100vh"
                }}
              >
                <div style={{
                  width: "fit-content",
                  margin: "auto",
                  maxHeight: "80vh",
                  position: "relative"
                }}>
                  {active.video ? 
                    <iframe src={"https://player.vimeo.com/video/" + active.video.providerUid} width={active.video.width} height={active.video.height} controls={false} autoPlay={true} byline={"false"} loop={true} style={{
                      maxWidth: "100%",
                      maxHeight: "95vh"
                    }}></iframe>
                  : null}
                  {/* <video src={active.acf ? active.acf.video_file.source_url : null} autoPlay playsInline loop muted style={{
                    maxWidth: "100%",
                    maxHeight: "95vh"
                  }}></video> */}
                </div>



              </Modal>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Home


class FeedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  render() {
    console.log("Feedimage:", this.props)
    return (
      <div style={{
        // backgroundImage: "url(" + this.props.localFile.childImageSharp.fluid.srcWebp + ")",
        width: "100%",
        // paddingBottom: "45%",
        padding: "20% 0px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        // opacity: this.state.loaded ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        position: "relative",
        cursor: "pointer"
      }}>
        <img src={this.props.item.video.thumbnailUrl} alt={this.props.item.title}></img>
        {/* <Img
          fluid={this.props.item.video.thumbnailUrl}
          alt={this.props.item.title}
        ></Img> */}
      </div>
    )
  }
}