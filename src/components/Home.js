import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HeroAnimation from "./HeroAnimation"
import HeroVideo from "./HeroVideo"
import Modal from '@material-ui/core/Modal';
import HeroImage from './HeroImage';

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
    this.setState({
      open: !this.state.open,
      active: item
    })
  }
  render() {
    var active = this.state.active
    return (
      <Grid container justify="center" alignItems="center" style={{
        overflow: "hidden"
      }}>
        <Grid item xs={12}>
          {this.props.data.allDatoCmsFrontpage.edges[0].node.header.map((item, i) =>
            item.__typename === "DatoCmsHeroVideo" ?
                <HeroVideo item={item} key={"video"+i} />
              : item.__typename === "DatoCmsHeroImage" ?
                <HeroImage item={item} key={"image" + i} />
            : item.__typename === "DatoCmsHeroAnimation" ?
                 <HeroAnimation item={item} key={"animation"+i} />
            : null
          )}          
        </Grid>
        <Grid item xs={11} style={{
          marginTop: 75
        }}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            {this.props.data.allDatoCmsVideo.edges.map((item, i) =>
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
                }}>
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