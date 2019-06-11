import React, { Component } from 'react';
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import MailIcon from '@material-ui/icons/MailOutline';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import Snackbar from '@material-ui/core/Snackbar';

import "../styles/main/header.sass"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    }
  }
  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <AppBar
          position="fixed"
          color="default"
          className={this.props.scroll < 100 && this.props.translucentNav === true ? "animatedNav transparent" : "animatedNav filled"}
          style={{
            boxShadow: "0px -50px 20px 20px white",
            paddingTop: 4,
            paddingBottom: 4,
            transition: "all 0.4s ease-in-out",
          }}>
          <Grid container justify="center" alignItems="center" style={{ marginLeft: -3 }}>
            <Grid item xs={11} >
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <a href="/" style={{
                    color: "black",
                    textDecoration: "none"
                  }}>
                    <h1 style={{
                      fontSize: "1em",
                      margin: 0,
                      fontWeight: 500
                    }}>{this.props.info.globalSeo.siteName}</h1>
                  </a>
                </Grid>
                <Grid item>
                  <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid item>
                      <Hidden smDown>
                        <Button
                          size="large"
                          style={{
                            margin: "5px",
                            padding: "5px 15px"
                          }}
                          component={Link}
                          to="/" onClick={() => {
                                window.scrollTo({
                                  top: 0,
                                  behavior: 'smooth'
                                });
                              }}>
                          Animationen
                        </Button>
                        <Button
                          size="large"
                          style={{
                            margin: "5px",
                            padding: "5px 15px"
                          }}
                          component={Link}
                          to="/about" onClick={() => {
                            window.scrollTo({
                              top: 0,
                              behavior: 'smooth'
                            });
                          }}>
                          About
                        </Button>
                        {
                          this.props.social.edges.map((item, i) =>
                              item.node.profileType === "Instagram" ?
                              <a href={item.node.url} key={i}>
                                <img src={"instagram.svg"} style={{ width: "16px", paddingTop: 13, float: "right", transform: "translateX(8px)" }} alt={item.node.profileType}></img>
                                </a>
                                
                              : item.node.profileType === "Email" ?
                                <a href={item.node.url} key={i}>
                                  <MailIcon style={{ paddingTop: 10, float: "right", color: "black", border: "0.1px" }} alt={item.node.profileType} />
                                </a>
                              :
                              <Button to={item.node.url} key={i}>
                                  {item.node.profileType}
                                </Button>
                          )}
                      </Hidden>
                      <Hidden mdUp>
                        <IconButton

                          aria-haspopup="true"
                          onClick={() => this.setState({
                            menu: !this.state.menu
                          })}>
                          <MenuIcon />
                        </IconButton>
                        <Menu style={{
                          marginTop: 50,
                        }} id="simple-menu" getContentAnchorEl={null} open={this.state.menu} onClose={() => this.setState({
                          menu: !this.state.menu
                        })} anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        >
                          <MenuItem
                            size="large"
                            style={{
                              margin: "5px",
                              padding: "5px 15px"
                            }}
                            to="/" onClick={() => {
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                              });
                            }}>
                            Animationen
                        </MenuItem>
                          <MenuItem
                            size="large"
                            style={{
                              margin: "5px",
                              padding: "5px 15px"
                            }}
                            to="/about" onClick={() => {
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                              });
                            }}>
                            About
                        </MenuItem>
                          {
                            this.props.social.edges.map((item, i) =>
                              item.node.profileType === "Instagram" ?
                                <MenuItem href={item.node.url} key={i}>
                                  <img src={"instagram.svg"} style={{ width: "16px", paddingTop: 13, float: "right", transform: "translateX(8px)" }}></img>
                                </MenuItem>

                                :
                                <MenuItem to={item.node.url} key={i}>
                                  {item.node.profileType}
                                </MenuItem>
                            )}
                        </Menu>
                      </Hidden>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
        {this.state.cookiesLoaded === true ?
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={!this.state.cookies}
            autoHideDuration={null}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Diese Seite nutzt Cookies</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => { this.props.history.push("/privacy-policy") }}              >
                <MoreIcon />
              </IconButton>,
              <Button key="undo" color="primary" size="large" onClick={() => {
                document.cookie = "useCookies=true; max-age=1004800";
                this.setState({ cookies: true })
              }}>
                Zustimmen
            </Button>,
            ]}
          />
          : null}
      </Grid>
    );
  }
}

export default Header;
